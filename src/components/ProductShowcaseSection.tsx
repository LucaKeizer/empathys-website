'use client';

import Image from 'next/image';
import { ShoppingCart, Star, CheckCircle, BookOpen, Users, Award } from 'lucide-react';

const ProductShowcaseSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      text: "Therapeutisch prentenboek"
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Voor kinderen en hun begeleiders"
    },
    {
      icon: <Award className="h-5 w-5" />,
      text: "Professioneel ontwikkeld"
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
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <Image
                  src="/images/book-cover.png"
                  alt="Samen naar de Finish - Therapeutisch Prentenboek"
                  width={400}
                  height={500}
                  className="w-full max-w-sm mx-auto h-auto shadow-lg"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-secondary-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Nieuw!
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Samen naar de Finish
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Een therapeutisch prentenboek dat kinderen en hun begeleiders helpt om samen 
                emoties, kwaliteiten en valkuilen te ontdekken en bespreekbaar te maken.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
                    <div className="text-primary-600">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits List */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Wat maakt dit boek bijzonder?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing and CTA */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">€24,95</span>
                    <span className="text-lg text-gray-500 line-through">€29,95</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                      -17%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Inclusief verzendkosten binnen Nederland</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="btn btn-secondary flex-1 inline-flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  In winkelwagen
                </button>
                <button className="btn btn-outline">
                  Lees meer
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-3 text-center">
                ✓ Gratis verzending vanaf €20 | ✓ 14 dagen bedenktijd | ✓ Veilig betalen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;