'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ShoppingCart, X } from 'lucide-react';

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
        className={`bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm transform transition-all duration-300 ease-out ${
          isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Success Icon and Title */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 mt-1">
            <CheckCircle className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Toegevoegd aan winkelwagen!
            </h3>
            <p className="text-xs text-gray-600">
              {quantity > 1 ? `${quantity}x ` : ''}{productTitle}
            </p>
          </div>
        </div>

        {/* Product Preview */}
        <div className="flex items-center gap-3 mb-4 p-2 bg-gray-50 rounded-lg">
          <Image
            src={productImage}
            alt={productTitle}
            width={40}
            height={40}
            className="w-10 h-10 object-contain rounded"
          />
          <div className="flex-grow">
            <p className="text-sm font-medium text-gray-900 line-clamp-1">
              {productTitle}
            </p>
            <p className="text-xs text-gray-600">€ 21,95</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleClose}
            className="flex-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            Verder winkelen
          </button>
          <Link
            href="/winkelwagen"
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center justify-center gap-1"
            onClick={handleClose}
          >
            <ShoppingCart className="h-4 w-4" />
            Winkelwagen
          </Link>
        </div>
      </div>
    </div>
  );
}