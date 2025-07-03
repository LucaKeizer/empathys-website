'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

const CompanyIntroSection = () => {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-100/50 to-blue-100/50 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-orange-100/50 to-pink-100/50 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-teal-100/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-800">Wie zijn wij?</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="block">Empathys</span>
                <span className="block text-2xl lg:text-3xl font-medium text-teal-600 mt-2">
                  Verbinding & Vertrouwen
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Empathys is opgezet door <strong>Marian Plat</strong> en <strong>Melany Molenaar-Stroek</strong>. 
                Empathys staat voor verbinding en vertrouwen. Vanuit Empathys organiseren wij trainingen 
                voor kinderen (sova-breintraining), professionals en ouders.
              </p>
              
              <p>
                Onze oudercursus 'Leer het gedrag van je kind beter te begrijpen en lezen' organiseren 
                wij meerdere keren per jaar. Samen hebben wij ook een{' '}
                <Link 
                  href="/producten/samen-naar-de-finish" 
                  className="text-teal-600 font-semibold hover:text-teal-700 underline decoration-2 underline-offset-2 transition-colors"
                >
                  therapeutisch prentenboek
                </Link>
                {' '}geschreven en ontwikkelen we spelmateriaal.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Trainingen</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Voor kinderen, professionals en ouders
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Prentenboek</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Therapeutisch ontwikkeld materiaal
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link href="/over-ons" className="group">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Heart className="h-5 w-5 fill-current" />
                  <span>Lees meer over ons</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-3xl transform -rotate-6 scale-110"></div>
              
              {/* Main image container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-8 shadow-2xl border border-white/50">
                <Image
                  src="/images/melany-marian.jpg"
                  alt="Melany Molenaar-Stroek en Marian Plat - Oprichters van Empathys"
                  width={400}
                  height={400}
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-400 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12">
                <span className="text-sm font-bold">Experts</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 fill-current" />
                  <span className="text-sm font-semibold">Therapeuten</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-300/40 to-orange-300/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;