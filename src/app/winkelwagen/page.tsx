"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Winkelwagen() {
  const { state, updateQuantity, removeItem } = useCart();
  const { items } = state;

  const total = state.total; // Remove shipping cost calculation

  // Show empty cart state
  if (items.length === 0) {
    return (
      <div className="bg-white min-h-screen">
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
            
            <div className="bg-gray-50 rounded-2xl p-12 mb-8">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
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
    <div className="bg-white min-h-screen">
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
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-6">
                    
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="w-24 h-24 object-contain rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-primary-600 mb-2">
                        {item.title}
                      </h3>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
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
                      className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 sticky top-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Overzicht
                </h2>

                {/* Cost Breakdown - Removed shipping costs */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">Subtotaal</span>
                    <span className="text-lg font-bold text-gray-900">€ {total.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Verzendkosten</span>
                    <span>Worden berekend bij afrekenen</span>
                  </div>
                  
                  <hr className="border-gray-300" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">Totaal</span>
                    <span className="text-xl font-bold text-gray-900">€ {total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/checkout"
                    className="w-full bg-[rgba(240,141,15,255)] hover:bg-[rgba(240,141,15,0.9)] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 text-lg"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Afrekenen
                  </Link>
                  
                  <Link
                    href="/producten"
                    className="w-full bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 text-lg border border-gray-300"
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