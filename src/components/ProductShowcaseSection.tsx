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
      icon: <BookOpen className="h-5 w-5" />,
      text: "Therapeutisch prentenboek",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Voor kinderen en begeleiders",
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: <Award className="h-5 w-5" />,
      text: "Professioneel ontwikkeld",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    "Helpt kinderen hun emoties te begrijpen",
    "Biedt praktische tools voor gesprekken",
    "Geschikt voor thuis en professionele settings",
    "Ontwikkeld door ervaren therapeuten",
    "Bevat interactieve elementen",
    "Inclusief handleiding voor begeleiders"
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-teal-100/40 to-blue-100/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 bg-gradient-to-br from-orange-100/40 to-pink-100/40 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-100/40 to-teal-100/40 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main product display */}
              <div className="relative bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
                <Image
                  src="/images/book-cover.png"
                  alt="Samen naar de Finish - Therapeutisch Prentenboek"
                  width={400}
                  height={500}
                  className="w-full max-w-sm mx-auto h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-400 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg transform rotate-12 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-bold">Nieuw!</span>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-teal-400 to-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300 mr-1" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">5.0</span>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-8 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-300/40 to-orange-300/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 -right-4 w-12 h-12 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
            </div>
          </div>

          {/* Product Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 px-4 py-2 rounded-full">
              <BookOpen className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-800">Ons prentenboek</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="block">Samen naar de</span>
                <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Finish
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Een therapeutisch prentenboek dat kinderen en hun begeleiders helpt om samen 
                emoties, kwaliteiten en valkuilen te ontdekken en bespreekbaar te maken.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-gray-900">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Heart className="h-5 w-5 text-teal-600 fill-current" />
                Wat maakt dit boek bijzonder?
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing and CTA */}
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-gray-900">€21,95</span>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Inclusief verzending
                    </div>
                  </div>
                  <p className="text-sm text-teal-600 font-medium">
                    Gratis bezorging in Volendam! 🚚
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="group flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  In winkelwagen
                </button>
                <a 
                  href="/producten/samen-naar-de-finish" 
                  className="group flex-1 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2"
                >
                  <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Lees meer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;