'use client';

import Image from 'next/image';
import { ShoppingCart, Star, CheckCircle, BookOpen, Users, Award, Sparkles, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const ProductShowcaseSection = () => {
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

  const features = [
    {
      icon: <BookOpen className="h-4 w-4" />,
      text: "Therapeutisch prentenboek",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: <Users className="h-4 w-4" />,
      text: "Voor kinderen en begeleiders",
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: "Professioneel ontwikkeld",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    "Helpt kinderen hun emoties te begrijpen",
    "Biedt praktische tools voor gesprekken",
    "Geschikt voor thuis en professionele settings"
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 lg:py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-100/30 to-blue-100/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-100/30 to-pink-100/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-800">Ons prentenboek</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="block">Samen naar de</span>
              <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Finish
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Een therapeutisch prentenboek dat kinderen en hun begeleiders helpt om samen 
              emoties, kwaliteiten en valkuilen te ontdekken
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Product Image */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                  <Image
                    src="/images/book-cover.png"
                    alt="Samen naar de Finish - Therapeutisch Prentenboek"
                    width={350}
                    height={440}
                    className="w-full max-w-xs mx-auto h-auto drop-shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Floating elements - smaller */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-orange-500 to-pink-500 text-white px-3 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    <span className="text-xs font-bold">Nieuw!</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-teal-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-300 text-yellow-300 mr-0.5" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold">5.0</span>
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                
                {/* Features - Horizontal layout */}
                <div className="grid grid-cols-1 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 hover:shadow-md transition-all duration-300">
                      <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-white shadow-sm`}>
                        {feature.icon}
                      </div>
                      <span className="font-medium text-gray-900 text-sm">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Benefits - Compact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-teal-600 fill-current" />
                    Wat maakt dit boek bijzonder?
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing and CTA - Compact */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl font-bold text-gray-900">€21,95</span>
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Inclusief verzending
                        </div>
                      </div>
                      <p className="text-xs text-teal-600 font-medium">
                        Gratis bezorging in Volendam! 🚚
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      In winkelwagen
                    </button>
                    <a 
                      href="/producten/samen-naar-de-finish" 
                      className="flex-1 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2"
                    >
                      <BookOpen className="h-4 w-4" />
                      Lees meer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;