"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, BookOpen, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Producten() {
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
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span>Producten</span>
        </nav>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Producten
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek onze collectie therapeutische prentenboeken, speciaal ontwikkeld om kinderen 
            te helpen bij hun emotionele ontwikkeling en zelfvertrouwen.
          </p>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Product Card - Takes 3 columns */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-72 h-72 mx-auto">
                      <Image
                        src="/images/samen-naar-de-finish.jpg"
                        alt="Samen naar de finish"
                        width={350}
                        height={350}
                        className="w-full h-full object-contain drop-shadow-lg"
                        priority
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      <Link 
                        href="/producten/samen-naar-de-finish"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        Samen naar de finish
                      </Link>
                    </h2>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">(Therapeutisch prentenboek)</span>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      Een therapeutisch prentenboek om samen met kinderen hun emoties, 
                      kwaliteiten en valkuilen te ontdekken. Perfect voor ouders en professionals.
                    </p>

                    <div className="space-y-6">
                      <div className="text-4xl font-bold text-gray-900">
                        € 21,95
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                          href="/producten/samen-naar-de-finish"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 text-lg"
                        >
                          <BookOpen className="h-5 w-5" />
                          Lees meer
                        </Link>
                        
                        <button
                          onClick={handleAddToCart}
                          className="bg-[rgba(240,141,15,255)] hover:bg-[rgba(240,141,15,0.9)] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2 text-lg"
                        >
                          <ShoppingCart className="h-5 w-5" />
                          Bestellen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coming Soon Card - Takes 1 column */}
            <div className="lg:col-span-1 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-10 w-10 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Meer boeken komen eraan!
                </h3>
                
                <p className="text-gray-600 mb-6">
                  We werken aan nieuwe therapeutische prentenboeken. 
                  Blijf op de hoogte voor updates.
                </p>
                
                <div className="text-sm text-primary-600 font-medium">
                  Binnenkort beschikbaar
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Waarom onze prentenboeken?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Therapeutisch Ontworpen</h4>
                  <p className="text-gray-600 text-sm">Ontwikkeld door professionals voor optimale emotionele ontwikkeling</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interactief Verhaal</h4>
                  <p className="text-gray-600 text-sm">Nodigt kinderen uit tot gesprek en zelfreflectie</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professionele Kwaliteit</h4>
                  <p className="text-gray-600 text-sm">Hoogwaardige materialen en prachtige illustraties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}