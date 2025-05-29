// tests/app/winkelwagen/page.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider } from '@/contexts/CartContext';
import Winkelwagen from '@/app/winkelwagen/page';

// Mock the useCart hook with custom implementations
const mockUseCart: any = {
  state: {
    items: [],
    total: 0,
    itemCount: 0,
  },
  updateQuantity: jest.fn(),
  removeItem: jest.fn(),
};

jest.mock('@/contexts/CartContext', () => ({
  ...jest.requireActual('@/contexts/CartContext'),
  useCart: () => mockUseCart,
}));

describe('Winkelwagen (Cart) Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders empty cart state correctly', () => {
    render(<Winkelwagen />);
    
    expect(screen.getByText('Winkelwagen')).toBeInTheDocument();
    expect(screen.getByText('Uw winkelwagen is leeg.')).toBeInTheDocument();
    expect(screen.getByText('Verder winkelen')).toBeInTheDocument();
  });

  test('renders breadcrumb navigation', () => {
    render(<Winkelwagen />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Winkelwagen')).toBeInTheDocument();
  });

  test('renders cart with items correctly', () => {
    mockUseCart.state = {
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 2,
          image: '/images/samen-naar-de-finish.jpg',
        },
      ],
      total: 43.90,
      itemCount: 2,
    };

    render(<Winkelwagen />);
    
    expect(screen.getByText('Samen naar de finish')).toBeInTheDocument();
    expect(screen.getByText('€ 43.90')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument(); // Quantity
  });

  test('calculates totals correctly with shipping', () => {
    mockUseCart.state = {
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 2,
          image: '/images/samen-naar-de-finish.jpg',
        },
      ],
      total: 43.90,
      itemCount: 2,
    };

    render(<Winkelwagen />);
    
    // Should show subtotal
    expect(screen.getByText('€ 43.90')).toBeInTheDocument();
    // Should show shipping cost
    expect(screen.getByText('€ 4.50')).toBeInTheDocument();
    // Should show total (43.90 + 4.50 = 48.40)
    expect(screen.getByText('€ 48.40')).toBeInTheDocument();
  });

  test('handles quantity increase', () => {
    mockUseCart.state = {
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 1,
          image: '/images/samen-naar-de-finish.jpg',
        },
      ],
      total: 21.95,
      itemCount: 1,
    };

    render(<Winkelwagen />);
    
    const increaseButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(increaseButton);
    
    expect(mockUseCart.updateQuantity).toHaveBeenCalledWith(1, 2);
  });

  test('handles quantity decrease', () => {
    mockUseCart.state = {
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 2,
          image: '/images/samen-naar-de-finish.jpg',
        },
      ],
      total: 43.90,
      itemCount: 2,
    };

    render(<Winkelwagen />);
    
    const decreaseButton = screen.getByRole('button', { name: '−' });
    fireEvent.click(decreaseButton);
    
    expect(mockUseCart.updateQuantity).toHaveBeenCalledWith(1, 1);
  });

  test('handles item removal', () => {
    mockUseCart.state = {
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 1,
          image: '/images/samen-naar-de-finish.jpg',
        },
      ],
      total: 21.95,
      itemCount: 1,
    };

    render(<Winkelwagen />);
    
    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);
    
    expect(mockUseCart.removeItem).toHaveBeenCalledWith(1);
  });

  test('shows checkout button when items in cart', () => {
    mockUseCart.state = {
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 1,
          image: '/images/samen-naar-de-finish.jpg',
        },
      ],
      total: 21.95,
      itemCount: 1,
    };

    render(<Winkelwagen />);
    
    expect(screen.getByText('Afrekenen')).toBeInTheDocument();
  });

  test('shows continue shopping link', () => {
    mockUseCart.state = {
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 1,
          image: '/images/samen-naar-de-finish.jpg',
        },
      ],
      total: 21.95,
      itemCount: 1,
    };

    render(<Winkelwagen />);
    
    expect(screen.getByText('Verder winkelen')).toBeInTheDocument();
  });
});