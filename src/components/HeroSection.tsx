'use client';

import Image from 'next/image';
import { ShoppingCart, ArrowRight, Heart, BookOpen } from 'lucide-react';
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
    <section className="relative min-h-[85vh] bg-gradient-to-br from-[#e8f4f8] via-[#f0f8fc] to-[#e0f2f7] overflow-hidden">
      {/* Subtle Background Elements - Simplified */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-teal-300/30 to-blue-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column - Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-200 shadow-sm">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm font-medium text-teal-800">Nieuw therapeutisch prentenboek</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Samen naar de</span>
                <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Finish
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-600">
                <Heart className="h-5 w-5 fill-current" />
                <span className="text-lg font-medium">Met liefde gemaakt voor kinderen</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Een <strong>therapeutisch prentenboek</strong> om samen met kinderen hun emoties, 
              kwaliteiten en valkuilen te ontdekken. Speciaal ontwikkeld door ervaren therapeuten 
              voor een <span className="text-teal-600 font-semibold">betekenisvolle verbinding</span> 
              met je kind.
            </p>

            {/* Features - Simplified */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">37 pagina's</div>
                  <div className="text-sm text-gray-600">Vol met verhalen</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-orange-600 fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Voor alle kinderen</div>
                  <div className="text-sm text-gray-600">Toegankelijk voor iedereen</div>
                </div>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900">€21,95</div>
                    <div className="text-sm text-gray-600">
                      <div>Inclusief verzending</div>
                      <div className="text-teal-600 font-semibold">Gratis in Volendam!</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={handleAddToCart}
                      className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Bestellen
                    </button>
                    
                    <a 
                      href="/producten/samen-naar-de-finish" 
                      className="group bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2"
                    >
                      Meer informatie
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Book Image - OPTIMIZED */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Clean Book Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <Image
                  src="/images/book-cover.png"
                  alt="Samen naar de Finish - Therapeutisch Prentenboek"
                  width={400}
                  height={500}
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto drop-shadow-lg transition-transform duration-300 hover:scale-102"
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              {/* Simple Floating Elements - Reduced animations */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold">Nieuw!</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full mr-1"></div>
                    <div className="w-3 h-3 bg-yellow-300 rounded-full mr-1"></div>
                    <div className="w-3 h-3 bg-yellow-300 rounded-full mr-1"></div>
                    <div className="w-3 h-3 bg-yellow-300 rounded-full mr-1"></div>
                    <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold">Therapeutisch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-auto">
          <path
            d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
            fill="white"
            className="opacity-90"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;