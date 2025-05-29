// tests/app/checkout/page.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Checkout from '@/app/checkout/page';

// Mock Next.js router
const mockPush = jest.fn();
const mockRouter = {
  push: mockPush,
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
};

jest.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
}));

// Mock the useCart hook
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

// Mock fetch for API calls
global.fetch = jest.fn();

describe('Checkout Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (fetch as jest.Mock).mockClear();
  });

  test('redirects to products if cart is empty', () => {
    mockUseCart.state = {
      items: [],
      total: 0,
      itemCount: 0,
    };

    render(<Checkout />);
    
    expect(screen.getByText('Uw winkelwagen is leeg')).toBeInTheDocument();
    expect(screen.getByText('Naar producten')).toBeInTheDocument();
  });

  test('renders checkout form when cart has items', () => {
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

    render(<Checkout />);
    
    expect(screen.getByText('Afrekenen')).toBeInTheDocument();
    expect(screen.getByLabelText('Voornaam *')).toBeInTheDocument();
    expect(screen.getByLabelText('Achternaam *')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mailadres *')).toBeInTheDocument();
  });

  test('displays order summary correctly', () => {
    render(<Checkout />);
    
    expect(screen.getByText('Samen naar de finish')).toBeInTheDocument();
    expect(screen.getByText('€ 21,95')).toBeInTheDocument();
    expect(screen.getByText('€ 4,50')).toBeInTheDocument(); // Shipping
    expect(screen.getByText('€ 26,45')).toBeInTheDocument(); // Total
  });

  test('validates required fields', async () => {
    render(<Checkout />);
    
    // Try to submit without filling required fields
    const submitButton = screen.getByText('Bestelling plaatsen');
    fireEvent.click(submitButton);
    
    // Should show validation error (mocked alert)
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith(
        expect.stringContaining('Vul alstublieft de volgende verplichte velden in')
      );
    });
  });

  test('validates email format', async () => {
    render(<Checkout />);
    
    // Fill in required fields with invalid email
    fireEvent.change(screen.getByLabelText('Voornaam *'), {
      target: { value: 'John' }
    });
    fireEvent.change(screen.getByLabelText('Achternaam *'), {
      target: { value: 'Doe' }
    });
    fireEvent.change(screen.getByLabelText('E-mailadres *'), {
      target: { value: 'invalid-email' }
    });
    fireEvent.change(screen.getByLabelText('Straatnaam *'), {
      target: { value: 'Test Street' }
    });
    fireEvent.change(screen.getByLabelText('Huisnummer *'), {
      target: { value: '123' }
    });
    fireEvent.change(screen.getByLabelText('Postcode *'), {
      target: { value: '1234 AB' }
    });
    fireEvent.change(screen.getByLabelText('Plaats *'), {
      target: { value: 'Amsterdam' }
    });
    
    // Accept terms
    fireEvent.click(screen.getByLabelText(/Ik ga akkoord met de algemene voorwaarden/));
    
    const submitButton = screen.getByText('Bestelling plaatsen');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('Vul een geldig e-mailadres in.');
    });
  });

  test('requires terms acceptance', async () => {
    render(<Checkout />);
    
    // Fill in all required fields but don't accept terms
    fireEvent.change(screen.getByLabelText('Voornaam *'), {
      target: { value: 'John' }
    });
    fireEvent.change(screen.getByLabelText('Achternaam *'), {
      target: { value: 'Doe' }
    });
    fireEvent.change(screen.getByLabelText('E-mailadres *'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByLabelText('Straatnaam *'), {
      target: { value: 'Test Street' }
    });
    fireEvent.change(screen.getByLabelText('Huisnummer *'), {
      target: { value: '123' }
    });
    fireEvent.change(screen.getByLabelText('Postcode *'), {
      target: { value: '1234 AB' }
    });
    fireEvent.change(screen.getByLabelText('Plaats *'), {
      target: { value: 'Amsterdam' }
    });
    
    const submitButton = screen.getByText('Bestelling plaatsen');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith(
        'U moet akkoord gaan met de algemene voorwaarden om door te gaan.'
      );
    });
  });

  test('submits form with valid data', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({
        success: true,
        paymentUrl: 'https://checkout.stripe.com/test-session'
      })
    });

    // Mock window.location.href
    delete (window as any).location;
    (window as any).location = { href: '' };

    render(<Checkout />);
    
    // Fill in all required fields
    fireEvent.change(screen.getByLabelText('Voornaam *'), {
      target: { value: 'John' }
    });
    fireEvent.change(screen.getByLabelText('Achternaam *'), {
      target: { value: 'Doe' }
    });
    fireEvent.change(screen.getByLabelText('E-mailadres *'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByLabelText('Straatnaam *'), {
      target: { value: 'Test Street' }
    });
    fireEvent.change(screen.getByLabelText('Huisnummer *'), {
      target: { value: '123' }
    });
    fireEvent.change(screen.getByLabelText('Postcode *'), {
      target: { value: '1234 AB' }
    });
    fireEvent.change(screen.getByLabelText('Plaats *'), {
      target: { value: 'Amsterdam' }
    });
    
    // Accept terms
    fireEvent.click(screen.getByLabelText(/Ik ga akkoord met de algemene voorwaarden/));
    
    const submitButton = screen.getByText('Bestelling plaatsen');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('john@example.com')
      });
    });
  });

  test('shows payment method options', () => {
    render(<Checkout />);
    
    expect(screen.getByText('iDEAL')).toBeInTheDocument();
    expect(screen.getByText('Creditcard')).toBeInTheDocument();
    expect(screen.getByText('Bancontact')).toBeInTheDocument();
  });

  test('handles payment method selection', () => {
    render(<Checkout />);
    
    const creditcardOption = screen.getByLabelText('Creditcard');
    fireEvent.click(creditcardOption);
    
    expect(creditcardOption).toBeChecked();
  });
});