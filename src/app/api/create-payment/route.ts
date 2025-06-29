// File: /src/app/api/create-payment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

// Function to check if address is in Volendam
function isVolendamAddress(city: string, postalCode: string): boolean {
  const normalizedCity = city.toLowerCase().trim();
  const normalizedPostalCode = postalCode.replace(/\s/g, '').toLowerCase();
  
  // Check if city is Volendam
  if (normalizedCity === 'volendam') {
    return true;
  }
  
  // Check postal codes for Volendam (1131-1135 range)
  const postalCodeMatch = normalizedPostalCode.match(/^(\d{4})/);
  if (postalCodeMatch) {
    const postalCodeNumber = parseInt(postalCodeMatch[1]);
    if (postalCodeNumber >= 1131 && postalCodeNumber <= 1135) {
      return true;
    }
  }
  
  return false;
}

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

    // Check if delivery is in Volendam
    const isVolendam = isVolendamAddress(
      orderData.shipping.city, 
      orderData.shipping.postalCode
    );

    // Determine shipping options based on location
    const shippingOptions: Stripe.Checkout.SessionCreateParams.ShippingOption[] = [];
    
    if (isVolendam) {
      // Free delivery for Volendam
      shippingOptions.push({
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0, // Free shipping
            currency: 'eur',
          },
          display_name: 'Gratis bezorging (Volendam)',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 2,
            },
          },
        },
      });
    } else {
      // Regular shipping for other locations
      shippingOptions.push({
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
      });
    }

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
      
      // Dynamic shipping options based on location
      shipping_options: shippingOptions,
      
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
        is_volendam_delivery: isVolendam.toString(),
        shipping_cost: isVolendam ? '0.00' : '4.50',
      },
      
      // Automatic tax calculation (optional)
      automatic_tax: { enabled: false },
      
      // Invoice settings
      invoice_creation: { enabled: true },
    });

    // Send confirmation email to your mother (optional)
    await sendOrderNotification(orderData, session.id, isVolendam);

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      paymentUrl: session.url,
      isVolendamDelivery: isVolendam,
      shippingCost: isVolendam ? 0 : 4.50,
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
async function sendOrderNotification(orderData: any, sessionId: string, isVolendam: boolean) {
  try {
    const shippingCostText = isVolendam ? 'Gratis (Volendam bezorging)' : '€4.50 (via Stripe)';
    
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
      ${isVolendam ? '*** VOLENDAM BEZORGING - GRATIS ***' : ''}
      
      Bestelde producten:
      ${orderData.items.map((item: any) => `- ${item.quantity}x ${item.title} (€${item.price})`).join('\n')}
      
      Subtotaal: €${orderData.pricing.total.toFixed(2)}
      Verzendkosten: ${shippingCostText}
      
      Betaalmethode: ${orderData.paymentMethod}
      
      ${orderData.orderNotes ? `Opmerkingen: ${orderData.orderNotes}` : ''}
    `;
    
    console.log('Order notification prepared:', emailContent);
    
  } catch (error) {
    console.error('Failed to send order notification:', error);
  }
}