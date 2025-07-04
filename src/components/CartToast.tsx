'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ShoppingCart, X, Sparkles } from 'lucide-react';

interface CartToastProps {
  isVisible: boolean;
  productTitle: string;
  productImage: string;
  quantity: number;
  onClose: () => void;
}

export default function CartToast({ isVisible, productTitle, productImage, quantity, onClose }: CartToastProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for animation to complete
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div 
        className={`bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-sm transform transition-all duration-300 ease-out ${
          isAnimating ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Success Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              Toegevoegd!
              <Sparkles className="h-4 w-4 text-orange-500" />
            </h3>
            <p className="text-sm text-gray-600">
              {quantity > 1 ? `${quantity}x ` : ''}{productTitle}
            </p>
          </div>
        </div>

        {/* Product Preview */}
        <div className="flex items-center gap-4 mb-6 p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
          <div className="w-16 h-16 bg-white rounded-lg shadow-sm p-2 flex-shrink-0">
            <Image
              src={productImage}
              alt={productTitle}
              width={60}
              height={60}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-gray-900 line-clamp-2 text-sm">
              {productTitle}
            </p>
            <p className="text-lg font-bold text-gray-900 mt-1">€ 21,95</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-3 text-sm text-gray-600 hover:text-gray-800 transition-colors rounded-xl hover:bg-gray-50 font-medium"
          >
            Verder winkelen
          </button>
          <Link
            href="/winkelwagen"
            className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            onClick={handleClose}
          >
            <ShoppingCart className="h-4 w-4" />
            Winkelwagen
          </Link>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-5000 ease-linear"
            style={{ 
              width: isAnimating ? '0%' : '100%',
              transition: isAnimating ? 'width 5s linear' : 'none'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}