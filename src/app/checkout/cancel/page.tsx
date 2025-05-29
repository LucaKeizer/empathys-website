"use client";

import Link from 'next/link';
import { XCircle, ArrowLeft, ShoppingCart, RefreshCw } from 'lucide-react';

export default function CheckoutCancel() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Cancel Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
          
          {/* Header */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Betaling geannuleerd
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Uw betaling is geannuleerd. Er zijn geen kosten in rekening gebracht.
          </p>

          {/* Information Card */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8 text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Wat kunt u nu doen?
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <RefreshCw className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Probeer het opnieuw</h3>
                  <p className="text-gray-600 text-sm">
                    Ga terug naar uw winkelwagen en probeer de betaling opnieuw.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ShoppingCart className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Verder winkelen</h3>
                  <p className="text-gray-600 text-sm">
                    Bekijk onze andere producten of voeg meer items toe aan uw winkelwagen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Hulp nodig?</h3>
                  <p className="text-gray-600 text-sm">
                    Neem contact met ons op als u problemen ondervindt met de betaling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Veelvoorkomende oorzaken
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Onvoldoende saldo op uw rekening</li>
              <li>• Problemen met uw internetverbinding</li>
              <li>• Browser werd gesloten tijdens het betaalproces</li>
              <li>• Betaling werd handmatig geannuleerd</li>
              <li>• Tijdelijke storing bij de bank</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/winkelwagen"
              className="inline-flex items-center justify-center gap-2 bg-[rgba(240,141,15,255)] hover:bg-[rgba(240,141,15,0.9)] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Terug naar winkelwagen
            </Link>
            
            <Link
              href="/producten"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              Verder winkelen
            </Link>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Heeft u hulp nodig of vragen over de betaling?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Contact opnemen
              </Link>
              
              <a
                href="mailto:info@empathys.nl"
                className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                info@empathys.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}