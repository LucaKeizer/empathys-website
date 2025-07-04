"use client";

import Link from 'next/link';
import { XCircle, ArrowLeft, ShoppingCart, RefreshCw, HelpCircle, Phone, Mail } from 'lucide-react';

export default function CheckoutCancel() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-full mb-6 shadow-lg">
              <XCircle className="h-10 w-10 text-red-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Betaling geannuleerd
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uw betaling is geannuleerd. Er zijn geen kosten in rekening gebracht.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* What to do next */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
                Wat kunt u nu doen?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Probeer het opnieuw</h3>
                    <p className="text-gray-600">Ga terug naar uw winkelwagen en probeer de betaling opnieuw.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Verder winkelen</h3>
                    <p className="text-gray-600">Bekijk onze andere producten of voeg meer items toe aan uw winkelwagen.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hulp nodig?</h3>
                    <p className="text-gray-600">Neem contact met ons op als u problemen ondervindt met de betaling.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Issues */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Veelvoorkomende oorzaken</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Onvoldoende saldo op uw rekening</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Problemen met uw internetverbinding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Browser werd gesloten tijdens het betaalproces</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Betaling werd handmatig geannuleerd</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Tijdelijke storing bij de bank</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Link
                href="/winkelwagen"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="h-5 w-5" />
                Terug naar winkelwagen
              </Link>
              
              <Link
                href="/producten"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="h-5 w-5" />
                Verder winkelen
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Heeft u hulp nodig?</h3>
              <p className="text-gray-600 mb-6">
                Heeft u hulp nodig of vragen over de betaling? Ons team helpt u graag verder.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-4 w-4" />
                  Contact opnemen
                </Link>
                
                <a
                  href="mailto:info@empathys.nl"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                  info@empathys.nl
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}