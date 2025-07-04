'use client';

import { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { state } = useCart();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/over-ons', label: 'Over ons' },
    { href: '/producten/samen-naar-de-finish', label: 'Ons prentenboek' },
    { href: '/cursussen', label: 'Cursussen', hasDropdown: true },
    { href: '/contact', label: 'Contact' },
  ];

  const dropdownItems = [
    { href: '/cursussen/oudercursus', label: 'Oudercursus' },
    { href: '/cursussen/sova-breintraining', label: 'Sova - breintraining' },
  ];

  const isHomePage = pathname === '/';

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className={`z-50 transition-colors duration-200 ${
      isHomePage 
        ? 'bg-gradient-to-r from-[#e8f4f8] via-[#f0f8fc] to-[#e0f2f7] border-b border-white/30' 
        : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            {/* Logo - Optimized with stable dimensions */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative w-[220px] h-12 lg:h-14" style={{ aspectRatio: '220/56' }}>
                <Image
                  src="/images/empathys-logo.png"
                  alt="Empathys"
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                  quality={90}
                  sizes="220px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 ml-16">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-1 group ${
                      pathname === item.href 
                        ? 'text-teal-600 bg-white/80 backdrop-blur-sm shadow-sm' 
                        : 'text-gray-700 hover:text-teal-600 hover:bg-white/60'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                    
                    {/* Active indicator */}
                    {pathname === item.href && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full"></div>
                    )}
                  </Link>
                  
                  {/* Dropdown for Cursussen */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                      <div className="py-2">
                        {dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`block px-4 py-3 transition-colors duration-200 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 ${
                              pathname === dropdownItem.href
                                ? 'bg-gradient-to-r from-teal-50 to-blue-50 text-teal-600 font-medium'
                                : 'text-gray-700 hover:text-teal-600'
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart - Optimized with stable dimensions */}
            <Link 
              href="/winkelwagen" 
              className="relative p-3 text-gray-700 hover:text-teal-600 transition-colors duration-200 hover:bg-white/60 rounded-lg group"
            >
              <ShoppingCart className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
              {state.itemCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse"
                  style={{ minWidth: '24px', minHeight: '24px' }} // Prevent layout shift
                >
                  {state.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={handleToggle}
              className="lg:hidden p-3 text-gray-700 hover:text-teal-600 transition-colors duration-200 hover:bg-white/60 rounded-lg"
              aria-label="Toggle menu"
              style={{ width: '48px', height: '48px' }} // Fixed dimensions
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with stable height */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 py-4 border-t border-white/30' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    pathname === item.href 
                      ? 'text-teal-600 bg-white/80 backdrop-blur-sm shadow-sm font-semibold' 
                      : 'text-gray-700 hover:text-teal-600 hover:bg-white/60'
                  }`}
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && (
                  <div className="ml-4 space-y-1 mt-2">
                    {dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className={`block py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
                          pathname === dropdownItem.href
                            ? 'text-teal-600 bg-white/80 backdrop-blur-sm font-medium'
                            : 'text-gray-600 hover:text-teal-600 hover:bg-white/60'
                        }`}
                        onClick={handleClose}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;