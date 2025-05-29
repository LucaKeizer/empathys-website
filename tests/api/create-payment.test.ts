// tests/api/create-payment.test.ts
import { NextRequest } from 'next/server';
import { POST } from '@/app/api/create-payment/route';

// Mock Stripe
const mockStripe = {
  checkout: {
    sessions: {
      create: jest.fn(),
    },
  },
};

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => mockStripe);
});

// Mock environment variables
process.env.STRIPE_SECRET_KEY = 'sk_test_fake_key';
process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:3000';

describe('/api/create-payment', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('creates Stripe checkout session successfully', async () => {
    const mockSession = {
      id: 'cs_test_session_id',
      url: 'https://checkout.stripe.com/test-session',
    };

    mockStripe.checkout.sessions.create.mockResolvedValue(mockSession);

    const orderData = {
      customer: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '+31 6 1234 5678',
      },
      shipping: {
        street: 'Test Street',
        houseNumber: '123',
        postalCode: '1234 AB',
        city: 'Amsterdam',
        country: 'Nederland',
      },
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 1,
          image: '/images/samen-naar-de-finish.jpg',
        },
      ],
      pricing: {
        subtotal: 21.95,
        shipping: 4.50,
        total: 26.45,
      },
      paymentMethod: 'ideal',
      orderNotes: 'Test order',
      subscribeNewsletter: false,
    };

    const request = new NextRequest('http://localhost:3000/api/create-payment', {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result.success).toBe(true);
    expect(result.sessionId).toBe('cs_test_session_id');
    expect(result.paymentUrl).toBe('https://checkout.stripe.com/test-session');

    expect(mockStripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        payment_method_types: ['ideal'],
        mode: 'payment',
        customer_email: 'john@example.com',
        line_items: expect.arrayContaining([
          expect.objectContaining({
            price_data: expect.objectContaining({
              currency: 'eur',
              unit_amount: 2195, // 21.95 * 100
              product_data: expect.objectContaining({
                name: 'Samen naar de finish',
              }),
            }),
            quantity: 1,
          }),
          expect.objectContaining({
            price_data: expect.objectContaining({
              currency: 'eur',
              unit_amount: 450, // 4.50 * 100
              product_data: expect.objectContaining({
                name: 'Verzendkosten',
              }),
            }),
            quantity: 1,
          }),
        ]),
        success_url: 'http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'http://localhost:3000/checkout/cancel',
      })
    );
  });

  test('handles different payment methods', async () => {
    const mockSession = {
      id: 'cs_test_session_id',
      url: 'https://checkout.stripe.com/test-session',
    };

    mockStripe.checkout.sessions.create.mockResolvedValue(mockSession);

    const orderData = {
      customer: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      },
      shipping: {
        street: 'Test Street',
        houseNumber: '123',
        postalCode: '1234 AB',
        city: 'Amsterdam',
        country: 'Nederland',
      },
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 1,
        },
      ],
      pricing: {
        subtotal: 21.95,
        shipping: 4.50,
        total: 26.45,
      },
      paymentMethod: 'card',
      orderNotes: '',
      subscribeNewsletter: false,
    };

    const request = new NextRequest('http://localhost:3000/api/create-payment', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });

    await POST(request);

    expect(mockStripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        payment_method_types: ['card'],
      })
    );
  });

  test('handles Bancontact payment method', async () => {
    const mockSession = {
      id: 'cs_test_session_id',
      url: 'https://checkout.stripe.com/test-session',
    };

    mockStripe.checkout.sessions.create.mockResolvedValue(mockSession);

    const orderData = {
      customer: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      },
      shipping: {
        street: 'Test Street',
        houseNumber: '123',
        postalCode: '1234 AB',
        city: 'Amsterdam',
        country: 'België',
      },
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 1,
        },
      ],
      pricing: {
        subtotal: 21.95,
        shipping: 4.50,
        total: 26.45,
      },
      paymentMethod: 'bancontact',
      orderNotes: '',
      subscribeNewsletter: false,
    };

    const request = new NextRequest('http://localhost:3000/api/create-payment', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });

    await POST(request);

    expect(mockStripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        payment_method_types: ['bancontact'],
      })
    );
  });

  test('handles multiple items correctly', async () => {
    const mockSession = {
      id: 'cs_test_session_id',
      url: 'https://checkout.stripe.com/test-session',
    };

    mockStripe.checkout.sessions.create.mockResolvedValue(mockSession);

    const orderData = {
      customer: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      },
      shipping: {
        street: 'Test Street',
        houseNumber: '123',
        postalCode: '1234 AB',
        city: 'Amsterdam',
        country: 'Nederland',
      },
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 2,
        },
      ],
      pricing: {
        subtotal: 43.90,
        shipping: 4.50,
        total: 48.40,
      },
      paymentMethod: 'ideal',
      orderNotes: '',
      subscribeNewsletter: false,
    };

    const request = new NextRequest('http://localhost:3000/api/create-payment', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });

    await POST(request);

    expect(mockStripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        line_items: expect.arrayContaining([
          expect.objectContaining({
            price_data: expect.objectContaining({
              unit_amount: 2195, // 21.95 * 100
            }),
            quantity: 2,
          }),
        ]),
      })
    );
  });

  test('handles Stripe errors', async () => {
    mockStripe.checkout.sessions.create.mockRejectedValue(
      new Error('Stripe API error')
    );

    const orderData = {
      customer: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      },
      shipping: {
        street: 'Test Street',
        houseNumber: '123',
        postalCode: '1234 AB',
        city: 'Amsterdam',
        country: 'Nederland',
      },
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 1,
        },
      ],
      pricing: {
        subtotal: 21.95,
        shipping: 4.50,
        total: 26.45,
      },
      paymentMethod: 'ideal',
      orderNotes: '',
      subscribeNewsletter: false,
    };

    const request = new NextRequest('http://localhost:3000/api/create-payment', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });

    const response = await POST(request);
    const result = await response.json();

    expect(response.status).toBe(500);
    expect(result.success).toBe(false);
    expect(result.error).toBe('Er ging iets mis bij het aanmaken van de betaling. Probeer het opnieuw.');
  });

  test('includes metadata in Stripe session', async () => {
    const mockSession = {
      id: 'cs_test_session_id',
      url: 'https://checkout.stripe.com/test-session',
    };

    mockStripe.checkout.sessions.create.mockResolvedValue(mockSession);

    const orderData = {
      customer: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '+31 6 1234 5678',
      },
      shipping: {
        street: 'Test Street',
        houseNumber: '123',
        postalCode: '1234 AB',
        city: 'Amsterdam',
        country: 'Nederland',
      },
      items: [
        {
          id: 1,
          title: 'Samen naar de finish',
          price: 21.95,
          quantity: 1,
        },
      ],
      pricing: {
        subtotal: 21.95,
        shipping: 4.50,
        total: 26.45,
      },
      paymentMethod: 'ideal',
      orderNotes: 'Special delivery instructions',
      subscribeNewsletter: true,
    };

    const request = new NextRequest('http://localhost:3000/api/create-payment', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });

    await POST(request);

    expect(mockStripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        metadata: {
          customer_name: 'John Doe',
          customer_phone: '+31 6 1234 5678',
          shipping_street: 'Test Street',
          shipping_house_number: '123',
          shipping_postal_code: '1234 AB',
          shipping_city: 'Amsterdam',
          shipping_country: 'Nederland',
          order_notes: 'Special delivery instructions',
          subscribe_newsletter: 'true',
        },
      })
    );
  });
});