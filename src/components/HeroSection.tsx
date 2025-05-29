'use client';

import Image from 'next/image';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const HeroSection = () => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: 1,
      title: "Samen naar de finish",
      price: 21.95,
      image: "/images/samen-naar-de-finish.jpg",
      slug: "samen-naar-de-finish"
    });
  };

  return (
    <section className="bg-[rgba(220,226,230,255)] section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Book Image */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
            <div className="relative">
              <Image
                src="/images/book-cover.png"
                alt="Samen naar de Finish"
                width={500}
                height={625}
                className="w-96 h-auto lg:w-[32rem]"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-4">
              Samen naar de Finish
            </h1>
            <p className="text-base text-gray-600 mb-8 max-w-2xl">
              Een therapeutisch prentenboek om samen met kinderen hun emoties, kwaliteiten en valkuilen te ontdekken.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleAddToCart}
                className="bg-[rgba(240,141,15,255)] text-white px-6 py-3 text-sm font-medium rounded-md hover:bg-[rgba(240,141,15,0.9)] transition-colors duration-200 inline-flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                In winkelwagen
              </button>
              
              <a href="/producten/samen-naar-de-finish" className="bg-white text-primary-600 px-6 py-3 text-sm font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 inline-flex items-center gap-2">
                Lees meer
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;