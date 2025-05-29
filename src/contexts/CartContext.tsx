"use client";

import React, { createContext, useContext, useReducer, ReactNode, useState, useEffect } from 'react';
import CartToast from '@/components/CartToast';

// Types
export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  slug?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

// Initial state
const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

// Utility functions
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

// localStorage utilities
const CART_STORAGE_KEY = 'empathys-cart';

const saveCartToStorage = (cartState: CartState) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));
    }
  } catch (error) {
    console.warn('Failed to save cart to localStorage:', error);
  }
};

const loadCartFromStorage = (): CartState | null => {
  try {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        // Recalculate totals to ensure consistency
        const recalculatedCart = {
          ...parsedCart,
          total: calculateTotal(parsedCart.items),
          itemCount: calculateItemCount(parsedCart.items),
        };
        return recalculatedCart;
      }
    }
  } catch (error) {
    console.warn('Failed to load cart from localStorage:', error);
  }
  return null;
};

// Reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'LOAD_CART':
      return action.payload;

    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      let newItems: CartItem[];
      if (existingItem) {
        // Update quantity if item already exists
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      
      const newState = {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
      
      // Save to localStorage
      saveCartToStorage(newState);
      return newState;
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const newState = {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
      
      // Save to localStorage
      saveCartToStorage(newState);
      return newState;
    }
    
    case 'UPDATE_QUANTITY': {
      let newItems: CartItem[];
      
      if (action.payload.quantity <= 0) {
        // Remove item if quantity is 0 or less
        newItems = state.items.filter(item => item.id !== action.payload.id);
      } else {
        // Update quantity
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      
      const newState = {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
      
      // Save to localStorage
      saveCartToStorage(newState);
      return newState;
    }
    
    case 'CLEAR_CART': {
      // Save to localStorage
      saveCartToStorage(initialState);
      return initialState;
    }
    
    default:
      return state;
  }
}

// Context
interface CartContextType {
  state: CartState;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  isLoaded: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toastData, setToastData] = useState<{
    isVisible: boolean;
    productTitle: string;
    productImage: string;
    quantity: number;
  }>({
    isVisible: false,
    productTitle: '',
    productImage: '',
    quantity: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCartFromStorage();
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: savedCart });
    }
    setIsLoaded(true);
  }, []);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    
    // Show toast notification
    setToastData({
      isVisible: true,
      productTitle: item.title,
      productImage: item.image,
      quantity: 1,
    });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleCloseToast = () => {
    setToastData(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <CartContext.Provider value={{
      state,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isLoaded,
    }}>
      {children}
      
      {/* Toast Notification */}
      <CartToast
        isVisible={toastData.isVisible}
        productTitle={toastData.productTitle}
        productImage={toastData.productImage}
        quantity={toastData.quantity}
        onClose={handleCloseToast}
      />
    </CartContext.Provider>
  );
}

// Hook
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}