"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Mail, Package, ArrowRight } from 'lucide-react';

interface OrderDetails {
  sessionId: string;
  customerEmail: string;
  orderTotal: string;
  orderItems: Array<{
    name: string;
    quantity: number;
  }>;
}

// Create a separate component for the content that uses useSearchParams
function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      fetchOrderDetails(sessionId);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  const fetchOrderDetails = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/order-details?session_id=${sessionId}`);
      const data = await response.json();
      
      if (data.success) {
        setOrderDetails(data.orderDetails);
      }
    } catch (error) {
      console.error('Failed to fetch order details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600">Bevestiging laden...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!sessionId) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Geen bestelling gevonden
            </h1>
            <p className="text-gray-600 mb-8">
              Er kon geen geldige bestelling worden gevonden. Als u net een betaling heeft voltooid, 
              controleer dan uw e-mail voor de orderbevestiging.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Terug naar homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 shadow-lg">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bedankt voor uw bestelling!
            </h1>
            
            <p className="text-lg text-gray-600 mb-2">
              Uw betaling is succesvol verwerkt.
            </p>
            
            {sessionId && (
              <p className="text-sm text-gray-500">
                Bestelnummer: #{sessionId.slice(-8).toUpperCase()}
              </p>
            )}
          </div>

          {/* Order Process Steps */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Wat gebeurt er nu?
            </h2>
            
            <div className="space-y-8">
              
              {/* Step 1 - Email Confirmation */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                  1
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="h-6 w-6 text-teal-600" />
                    <h3 className="text-xl font-semibold text-gray-900">E-mailbevestiging</h3>
                  </div>
                  <p className="text-gray-600">
                    U ontvangt binnen enkele minuten een bevestigingsmail met uw orderdetails 
                    {orderDetails?.customerEmail && ` op ${orderDetails.customerEmail}`}.
                  </p>
                </div>
              </div>

              {/* Step 2 - Processing */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                  2
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <Package className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Bestelling voorbereiden</h3>
                  </div>
                  <p className="text-gray-600">
                    Wij bereiden uw bestelling zorgvuldig voor. Dit duurt meestal 1-2 werkdagen.
                  </p>
                </div>
              </div>

              {/* Step 3 - Shipping */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-lg font-bold">
                  3
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <Package className="h-6 w-6 text-gray-400" />
                    <h3 className="text-xl font-semibold text-gray-700">Verzending</h3>
                  </div>
                  <p className="text-gray-600">
                    Uw bestelling wordt verzonden en u ontvangt een track & trace code. 
                    Levering binnen 2-5 werkdagen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          {orderDetails && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Uw bestelling
              </h3>
              
              <div className="space-y-3">
                {orderDetails.orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-gray-600">
                      {item.quantity}x {item.name}
                    </span>
                  </div>
                ))}
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Totaal</span>
                    <span>€ {orderDetails.orderTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl border border-blue-200 p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Vragen over uw bestelling?
            </h3>
            <p className="text-gray-600 mb-6">
              Heeft u vragen of opmerkingen over uw bestelling? Neem gerust contact met ons op.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Contact opnemen
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <a
                href="mailto:info@empathys.nl"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@empathys.nl
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/producten"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Verder winkelen
              </Link>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Terug naar homepage
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function CheckoutSuccessLoading() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Bevestiging laden...</p>
        </div>
      </div>
    </div>
  );
}

// Main component wrapped in Suspense
export default function CheckoutSuccess() {
  return (
    <Suspense fallback={<CheckoutSuccessLoading />}>
      <CheckoutSuccessContent />
    </Suspense>
  );
}