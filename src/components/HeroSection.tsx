'use client';

import Image from 'next/image';
import { ShoppingCart, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Book Image */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
            <div className="relative">
              <Image
                src="/images/book-cover.png"
                alt="Samen naar de Finish"
                width={300}
                height={400}
                className="w-64 h-auto lg:w-80 shadow-lg"
                priority
              />
              {/* Stack effect - multiple books */}
              <div className="absolute -bottom-2 -right-2 w-64 h-auto lg:w-80 bg-white shadow-md -z-10 rounded-sm opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-auto lg:w-80 bg-white shadow-sm -z-20 rounded-sm opacity-40"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Samen naar de Finish
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Een therapeutisch prentenboek om samen met kinderen hun emoties, kwaliteiten en valkuilen te ontdekken.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-secondary inline-flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                In winkelwagen
              </button>
              
              <button className="btn btn-outline inline-flex items-center gap-2">
                Lees meer
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;