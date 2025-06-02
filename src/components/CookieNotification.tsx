'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';

const CookieNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('empathys-cookies-accepted');
    
    if (!hasAcceptedCookies) {
      // Show notification after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Store acceptance in localStorage
    localStorage.setItem('empathys-cookies-accepted', 'true');
    
    // Animate out
    setIsAnimating(false);
    
    // Hide after animation completes
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleClose = () => {
    // Same behavior as accept for now
    handleAccept();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div 
        className={`bg-white border-t border-gray-200 shadow-lg transform transition-all duration-300 ease-out ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            
            {/* Cookie Icon and Text */}
            <div className="flex items-center gap-3 flex-grow">
              <div className="flex-shrink-0">
                <Cookie className="h-5 w-5 text-primary-600" />
              </div>
              
              <div className="text-sm text-gray-700">
                <span>
                  Wij gebruiken cookies om uw ervaring te verbeteren. Door verder te gaan, gaat u akkoord met ons{' '}
                  <Link 
                    href="/algemene-voorwaarden" 
                    className="text-primary-600 underline hover:text-primary-700"
                  >
                    cookiebeleid
                  </Link>
                  .
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleAccept}
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Akkoord
              </button>
              
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Sluiten"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieNotification;