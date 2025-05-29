// tests/contexts/CartContext.test.tsx
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from '@/contexts/CartContext';

// Test component to interact with cart
const TestCartComponent = () => {
  const { state, addItem, removeItem, updateQuantity, clearCart } = useCart();

  return (
    <div>
      <div data-testid="cart-total">{state.total.toFixed(2)}</div>
      <div data-testid="cart-count">{state.itemCount}</div>
      <div data-testid="cart-items">{JSON.stringify(state.items)}</div>
      
      <button
        data-testid="add-book"
        onClick={() => addItem({
          id: 1,
          title: "Samen naar de finish",
          price: 21.95,
          image: "/images/samen-naar-de-finish.jpg",
          slug: "samen-naar-de-finish"
        })}
      >
        Add Book
      </button>
      
      <button
        data-testid="remove-item"
        onClick={() => removeItem(1)}
      >
        Remove Item
      </button>
      
      <button
        data-testid="update-quantity"
        onClick={() => updateQuantity(1, 3)}
      >
        Update Quantity to 3
      </button>
      
      <button
        data-testid="clear-cart"
        onClick={() => clearCart()}
      >
        Clear Cart
      </button>
    </div>
  );
};

const renderCartProvider = () => {
  return render(
    <CartProvider>
      <TestCartComponent />
    </CartProvider>
  );
};

describe('CartContext', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('initializes with empty cart', () => {
    renderCartProvider();
    
    expect(screen.getByTestId('cart-total')).toHaveTextContent('0.00');
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    expect(screen.getByTestId('cart-items')).toHaveTextContent('[]');
  });

  test('adds item to cart correctly', () => {
    renderCartProvider();
    
    act(() => {
      fireEvent.click(screen.getByTestId('add-book'));
    });

    expect(screen.getByTestId('cart-total')).toHaveTextContent('21.95');
    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
    
    const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent || '[]');
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0]).toMatchObject({
      id: 1,
      title: "Samen naar de finish",
      price: 21.95,
      quantity: 1
    });
  });

  test('increases quantity when adding same item twice', () => {
    renderCartProvider();
    
    act(() => {
      fireEvent.click(screen.getByTestId('add-book'));
      fireEvent.click(screen.getByTestId('add-book'));
    });

    expect(screen.getByTestId('cart-total')).toHaveTextContent('43.90');
    expect(screen.getByTestId('cart-count')).toHaveTextContent('2');
    
    const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent || '[]');
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].quantity).toBe(2);
  });

  test('removes item from cart correctly', () => {
    renderCartProvider();
    
    act(() => {
      fireEvent.click(screen.getByTestId('add-book'));
      fireEvent.click(screen.getByTestId('remove-item'));
    });

    expect(screen.getByTestId('cart-total')).toHaveTextContent('0.00');
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    expect(screen.getByTestId('cart-items')).toHaveTextContent('[]');
  });

  test('updates item quantity correctly', () => {
    renderCartProvider();
    
    act(() => {
      fireEvent.click(screen.getByTestId('add-book'));
      fireEvent.click(screen.getByTestId('update-quantity'));
    });

    expect(screen.getByTestId('cart-total')).toHaveTextContent('65.85'); // 21.95 * 3
    expect(screen.getByTestId('cart-count')).toHaveTextContent('3');
    
    const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent || '[]');
    expect(cartItems[0].quantity).toBe(3);
  });

  test('removes item when quantity is updated to 0', () => {
    renderCartProvider();
    
    const { rerender } = render(
      <CartProvider>
        <TestCartComponent />
      </CartProvider>
    );

    act(() => {
      fireEvent.click(screen.getByTestId('add-book'));
    });

    // Create a component that updates quantity to 0
    const UpdateToZeroComponent = () => {
      const { updateQuantity } = useCart();
      return (
        <button
          data-testid="update-to-zero"
          onClick={() => updateQuantity(1, 0)}
        >
          Set to Zero
        </button>
      );
    };

    rerender(
      <CartProvider>
        <TestCartComponent />
        <UpdateToZeroComponent />
      </CartProvider>
    );

    act(() => {
      fireEvent.click(screen.getByTestId('update-to-zero'));
    });

    expect(screen.getByTestId('cart-items')).toHaveTextContent('[]');
  });

  test('clears cart correctly', () => {
    renderCartProvider();
    
    act(() => {
      fireEvent.click(screen.getByTestId('add-book'));
      fireEvent.click(screen.getByTestId('add-book'));
      fireEvent.click(screen.getByTestId('clear-cart'));
    });

    expect(screen.getByTestId('cart-total')).toHaveTextContent('0.00');
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    expect(screen.getByTestId('cart-items')).toHaveTextContent('[]');
  });

  test('saves cart to localStorage', () => {
    renderCartProvider();
    
    act(() => {
      fireEvent.click(screen.getByTestId('add-book'));
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'empathys-cart',
      expect.stringContaining('"total":21.95')
    );
  });

  test('throws error when useCart is used outside CartProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    const TestComponent = () => {
      useCart(); // This should throw
      return <div>Test</div>;
    };

    expect(() => render(<TestComponent />)).toThrow(
      'useCart must be used within a CartProvider'
    );

    consoleSpy.mockRestore();
  });
});