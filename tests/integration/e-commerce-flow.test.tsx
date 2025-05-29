// tests/integration/e-commerce-flow.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CartProvider } from '@/contexts/CartContext';
import Producten from '@/app/producten/page';
import Winkelwagen from '@/app/winkelwagen/page';

// Mock Next.js router
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => '/producten',
}));

// Mock fetch for API calls
global.fetch = jest.fn();

describe('E-commerce Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('complete shopping flow: add to cart -> view cart -> checkout', async () => {
    // Start on products page
    const { rerender } = render(
      <CartProvider>
        <Producten />
      </CartProvider>
    );

    // Add product to cart
    const addToCartButton = screen.getByText('Bestellen');
    fireEvent.click(addToCartButton);

    // Verify cart has been updated (check for toast notification)
    await waitFor(() => {
      expect(screen.getByText('Toegevoegd aan winkelwagen!')).toBeInTheDocument();
    });

    // Navigate to cart page
    rerender(
      <CartProvider>
        <Winkelwagen />
      </CartProvider>
    );

    // Verify product is in cart
    expect(screen.getByText('Samen naar de finish')).toBeInTheDocument();
    expect(screen.getByText('€ 21,95')).toBeInTheDocument();

    // Verify totals
    expect(screen.getByText('€ 4,50')).toBeInTheDocument(); // Shipping
    expect(screen.getByText('€ 26,45')).toBeInTheDocument(); // Total

    // Verify checkout button is present
    expect(screen.getByText('Afrekenen')).toBeInTheDocument();
  });

  test('cart persistence across page reloads', () => {
    // Mock localStorage
    const mockCartData = {
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

    localStorage.setItem('empathys-cart', JSON.stringify(mockCartData));

    render(
      <CartProvider>
        <Winkelwagen />
      </CartProvider>
    );

    // Cart should be loaded from localStorage
    expect(screen.getByText('Samen naar de finish')).toBeInTheDocument();
    expect(screen.getByText('€ 21,95')).toBeInTheDocument();
  });

  test('quantity updates reflect in totals', () => {
    render(
      <CartProvider>
        <Producten />
      </CartProvider>
    );

    // Add product to cart twice
    const addToCartButton = screen.getByText('Bestellen');
    fireEvent.click(addToCartButton);
    fireEvent.click(addToCartButton);

    // Re-render cart page
    const { rerender } = render(
      <CartProvider>
        <Winkelwagen />
      </CartProvider>
    );

    rerender(
      <CartProvider>
        <Winkelwagen />
      </CartProvider>
    );

    // Should show quantity 2 and updated total
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    expect(screen.getByText('€ 43,90')).toBeInTheDocument(); // 2 * 21.95
  });

  test('empty cart shows appropriate message', () => {
    render(
      <CartProvider>
        <Winkelwagen />
      </CartProvider>
    );

    expect(screen.getByText('Uw winkelwagen is leeg.')).toBeInTheDocument();
    expect(screen.getByText('Verder winkelen')).toBeInTheDocument();
  });

  test('cart item removal works correctly', () => {
    // Add item first
    const { rerender } = render(
      <CartProvider>
        <Producten />
      </CartProvider>
    );

    const addToCartButton = screen.getByText('Bestellen');
    fireEvent.click(addToCartButton);

    // Go to cart
    rerender(
      <CartProvider>
        <Winkelwagen />
      </CartProvider>
    );

    // Remove item
    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);

    // Cart should be empty
    expect(screen.getByText('Uw winkelwagen is leeg.')).toBeInTheDocument();
  });
});

// tests/integration/form-validation.test.tsx
describe('Form Validation Integration Tests', () => {
  test('contact form validation flow', () => {
    const Contact = require('@/app/contact/page').default;
    
    render(<Contact />);

    // Try to submit empty form
    const submitButton = screen.getByText('Verstuur');
    fireEvent.click(submitButton);

    // Should show validation error
    expect(global.alert).toHaveBeenCalledWith(
      'Vul alstublieft alle verplichte velden in (Naam en E-mail)'
    );

    // Fill in name only
    fireEvent.change(screen.getByPlaceholderText('Naam *'), {
      target: { value: 'John Doe' }
    });
    fireEvent.click(submitButton);

    // Should still show validation error
    expect(global.alert).toHaveBeenCalledWith(
      'Vul alstublieft alle verplichte velden in (Naam en E-mail)'
    );

    // Fill in email as well
    fireEvent.change(screen.getByPlaceholderText('E-mail *'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.click(submitButton);

    // Should create mailto link
    expect(window.location.href).toContain('mailto:info@empathys.nl');
  });

  test('checkout form validation flow', () => {
    // Mock cart with items
    const mockUseCart = {
      state: {
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
      },
      clearCart: jest.fn(),
    };

    jest.mock('@/contexts/CartContext', () => ({
      useCart: () => mockUseCart,
    }));

    const Checkout = require('@/app/checkout/page').default;
    render(<Checkout />);

    // Try to submit without required fields
    const submitButton = screen.getByText('Bestelling plaatsen');
    fireEvent.click(submitButton);

    expect(global.alert).toHaveBeenCalledWith(
      expect.stringContaining('Vul alstublieft de volgende verplichte velden in')
    );

    // Fill in invalid email
    fireEvent.change(screen.getByLabelText('E-mailadres *'), {
      target: { value: 'invalid-email' }
    });
    fireEvent.click(submitButton);

    expect(global.alert).toHaveBeenCalledWith('Vul een geldig e-mailadres in.');
  });
});