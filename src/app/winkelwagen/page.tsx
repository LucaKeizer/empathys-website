// File: /src/app/winkelwagen/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, X, ShoppingBag, Info } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Winkelwagen() {
  const { state, updateQuantity, removeItem } = useCart();
  const { items } = state;

  const total = state.total;

  // Show empty cart state
  if (items.length === 0) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-8">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">›</span>
            <span>Winkelwagen</span>
          </nav>
        </div>

        {/* Empty Cart Content */}
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Winkelwagen
            </h1>
            
            <div className="bg-white rounded-3xl shadow-xl p-12 mb-8">
              <ShoppingBag className="h-20 w-20 text-gray-400 mx-auto mb-6" />
              <p className="text-xl text-gray-600 mb-8">
                Uw winkelwagen is leeg.
              </p>
              
              <Link
                href="/producten"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
              >
                Verder winkelen
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show filled cart state
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span>Winkelwagen</span>
        </nav>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Winkelwagen
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Cart Items - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center gap-6">
                    
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={120}
                          height={120}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-primary-600 mb-4">
                        {item.title}
                      </h3>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center font-medium px-2">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-2xl font-bold text-gray-900">
                        € {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Overzicht
                </h2>

                {/* Cost Breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-lg font-medium text-gray-900">Subtotaal</span>
                    <span className="text-lg font-bold text-gray-900">€ {total.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 py-2">
                    <span>Verzendkosten</span>
                    <span>Worden berekend bij afrekenen</span>
                  </div>
                  
                  <hr className="border-gray-300" />
                  
                  <div className="flex justify-between items-center py-3">
                    <span className="text-xl font-bold text-gray-900">Totaal</span>
                    <span className="text-xl font-bold text-gray-900">€ {total.toFixed(2)}*</span>
                  </div>
                  
                  <p className="text-xs text-gray-500">* Exclusief verzendkosten</p>
                </div>

                {/* Shipping Information */}
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-900 mb-2">Verzendkosten:</p>
                      <ul className="text-blue-800 space-y-1">
                        <li>• Volendam: <strong>Gratis bezorging</strong></li>
                        <li>• Overige locaties: €4,50</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Link
                    href="/checkout"
                    className="w-full bg-[rgba(240,141,15,255)] hover:bg-[rgba(240,141,15,0.9)] text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Afrekenen
                  </Link>
                  
                  <Link
                    href="/producten"
                    className="w-full bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 text-lg border border-gray-300 hover:border-gray-400"
                  >
                    ← Verder winkelen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}