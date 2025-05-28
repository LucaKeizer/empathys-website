'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/over-ons', label: 'Over ons' },
    { href: '/prentenboek', label: 'Ons prentenboek' },
    { href: '/cursussen', label: 'Cursussen', hasDropdown: true },
    { href: '/contact', label: 'Contact' },
  ];

  const dropdownItems = [
    { href: '/cursussen/oudercursus', label: 'Oudercursus' },
    { href: '/cursussen/sova-breintraining', label: 'Sova - breintraining' },
  ];

  return (
    <header className={`z-50 ${pathname === '/' ? 'bg-[rgba(220,226,230,255)]' : 'bg-white shadow-sm'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/empathys-logo.png"
                alt="Empathys"
                width={220}
                height={65}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 ml-16">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors duration-200 inline-flex items-center gap-1 ${
                      pathname === item.href 
                        ? 'text-primary-600' 
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && <span className="text-xs">▼</span>}
                  </Link>
                  
                  {/* Dropdown for Cursussen */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`block px-4 py-2 transition-colors duration-200 ${
                              pathname === dropdownItem.href
                                ? 'bg-primary-50 text-primary-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
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
            {/* Shopping Cart */}
            <Link href="/winkelwagen" className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 font-medium transition-colors duration-200 ${
                      pathname === item.href 
                        ? 'text-primary-600' 
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={`block py-2 text-sm transition-colors duration-200 ${
                            pathname === dropdownItem.href
                              ? 'text-primary-600'
                              : 'text-gray-600 hover:text-primary-600'
                          }`}
                          onClick={() => setIsOpen(false)}
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
        )}
      </nav>
    </header>
  );
};

export default Navigation;