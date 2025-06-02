import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe (you'll need to add your secret key to environment variables)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json({
        success: false,
        error: 'Session ID is required',
      }, { status: 400 });
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'payment_intent', 'shipping_details'],
    });

    if (!session) {
      return NextResponse.json({
        success: false,
        error: 'Session not found',
      }, { status: 404 });
    }

    // Extract order details
    const orderDetails = {
      sessionId: session.id,
      customerEmail: session.customer_email,
      orderTotal: (session.amount_total! / 100).toFixed(2), // Convert from cents
      orderItems: session.line_items?.data.map(item => ({
        name: item.description,
        quantity: item.quantity,
      })) || [],
      paymentStatus: session.payment_status,
      shippingDetails: (session as any).shipping_details, // Type assertion to fix TypeScript error
    };

    return NextResponse.json({
      success: true,
      orderDetails,
    });

  } catch (error) {
    console.error('Order details retrieval error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Er ging iets mis bij het ophalen van de ordergegevens.',
    }, { status: 500 });
  }
}

// Keep the POST method for backward compatibility, but it should use the same logic as create-payment
export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    
    // Create line items for Stripe
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = orderData.items.map((item: any) => ({
      price_data: {
        currency: 'eur',
        unit_amount: Math.round(item.price * 100), // Convert to cents
        product_data: {
          name: item.title,
          images: item.image ? [`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`] : [],
          metadata: {
            product_id: item.id.toString(),
          },
        },
      },
      quantity: item.quantity,
    }));

    // NOTE: Shipping is now handled by Stripe's shipping_options, not as a line item
    // This prevents double charging for shipping

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: orderData.paymentMethod === 'ideal' 
        ? ['ideal'] 
        : orderData.paymentMethod === 'bancontact' 
        ? ['bancontact'] 
        : ['card'],
      
      line_items: lineItems,
      
      mode: 'payment',
      
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
      
      // Customer information
      customer_email: orderData.customer.email,
      
      // Shipping information
      shipping_address_collection: {
        allowed_countries: ['NL', 'BE', 'DE'],
      },
      
      // Shipping options - this is where shipping cost is added
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 450, // €4.50 in cents
              currency: 'eur',
            },
            display_name: 'Standaard verzending',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 2,
              },
              maximum: {
                unit: 'business_day',
                value: 5,
              },
            },
          },
        },
      ],
      
      // Metadata to store order information
      metadata: {
        customer_name: `${orderData.customer.firstName} ${orderData.customer.lastName}`,
        customer_phone: orderData.customer.phone || '',
        shipping_street: orderData.shipping.street,
        shipping_house_number: orderData.shipping.houseNumber,
        shipping_postal_code: orderData.shipping.postalCode,
        shipping_city: orderData.shipping.city,
        shipping_country: orderData.shipping.country,
        order_notes: orderData.orderNotes || '',
        subscribe_newsletter: orderData.subscribeNewsletter.toString(),
      },
      
      // Automatic tax calculation (optional)
      automatic_tax: { enabled: false },
      
      // Invoice settings
      invoice_creation: { enabled: true },
    });

    // Send confirmation email to your mother (optional)
    await sendOrderNotification(orderData, session.id);

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      paymentUrl: session.url,
    });

  } catch (error) {
    console.error('Payment creation error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Er ging iets mis bij het aanmaken van de betaling. Probeer het opnieuw.',
    }, { status: 500 });
  }
}

// Function to send order notification email
async function sendOrderNotification(orderData: any, sessionId: string) {
  try {
    // You can integrate with services like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with Gmail SMTP
    // - Or any other email service
    
    const emailContent = `
      Nieuwe bestelling ontvangen!
      
      Bestelling ID: ${sessionId}
      
      Klant:
      - Naam: ${orderData.customer.firstName} ${orderData.customer.lastName}
      - Email: ${orderData.customer.email}
      - Telefoon: ${orderData.customer.phone}
      
      Verzendadres:
      ${orderData.shipping.street} ${orderData.shipping.houseNumber}
      ${orderData.shipping.postalCode} ${orderData.shipping.city}
      ${orderData.shipping.country}
      
      Bestelde producten:
      ${orderData.items.map((item: any) => `- ${item.quantity}x ${item.title} (€${item.price})`).join('\n')}
      
      Subtotaal: €${orderData.pricing.total.toFixed(2)}
      Verzendkosten: €4.50 (via Stripe)
      
      Betaalmethode: ${orderData.paymentMethod}
      
      ${orderData.orderNotes ? `Opmerkingen: ${orderData.orderNotes}` : ''}
    `;
    
    // Here you would send the email
    // Example with a fetch to your email service:
    /*
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'info@empathys.nl',
        subject: 'Nieuwe bestelling ontvangen',
        text: emailContent,
      }),
    });
    */
    
    console.log('Order notification prepared:', emailContent);
    
  } catch (error) {
    console.error('Failed to send order notification:', error);
    // Don't throw error here - payment should still proceed
  }
}