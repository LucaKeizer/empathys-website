import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe (you'll need to add your secret key to environment variables)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

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

    // Add shipping as a line item
    lineItems.push({
      price_data: {
        currency: 'eur',
        unit_amount: 450, // €4.50 in cents
        product_data: {
          name: 'Verzendkosten',
          description: 'Standaard verzending binnen Nederland',
        },
      },
      quantity: 1,
    });

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
      
      // Pre-fill shipping address
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
      
      Totaal: €${orderData.pricing.total.toFixed(2)}
      
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