import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Users, Award, Sparkles } from 'lucide-react';

export default function TeamSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-teal-100/30 to-blue-100/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-100/30 to-pink-100/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-100/20 to-teal-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 px-4 py-2 rounded-full mb-6">
            <Users className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-800">Ons team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            De <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">experts</span> achter Empathys
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Twee ervaren therapeuten die hun passie en expertise combineren om kinderen en gezinnen te helpen groeien.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Melany Molenaar-Stroek */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left - Content */}
              <div className="relative z-10 space-y-8">
                {/* Decorative background */}
                <div className="absolute -inset-8 bg-gradient-to-br from-teal-50/80 to-blue-50/80 rounded-3xl blur-xl"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-4 py-2 rounded-full mb-6">
                    <Heart className="h-4 w-4 fill-current" />
                    <span className="text-sm font-semibold">Kinder- & Jeugdtherapeut</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Melany Molenaar-Stroek
                  </h3>
                  
                  <div className="prose prose-lg max-w-none text-gray-700 mb-8 space-y-4">
                    <p>
                      Mijn naam is Melany Molenaar-Stroek. Ik ben getrouwd en moeder van twee prachtige zoons. 
                      Voorheen ben ik altijd werkzaam geweest op het speciaal basisonderwijs als docent. Naast het 
                      werken als docent ben ik mezelf gaan specialiseren als{' '}
                      <a href="https://www.kinderpraktijkmelany.nl/" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:text-teal-700 underline decoration-2 underline-offset-2 transition-colors">
                        kinder- en jeugdtherapeut
                      </a>.
                    </p>
                  </div>
                  
                  {/* Expertise badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Speciaal Onderwijs</span>
                    <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Kindertherapie</span>
                    <span className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Gedragsproblemen</span>
                  </div>
                  
                  <Link
                    href="/over-ons/melany-molenaar-stroek"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span>Lees meer over Melany</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                {/* Background decorations */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-3xl transform -rotate-6 scale-110"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <Image
                    src="/images/melany-large.jpg"
                    alt="Melany Molenaar-Stroek - Kinder- en jeugdtherapeut"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-400 to-pink-500 text-white px-4 py-2 rounded-2xl shadow-lg transform rotate-12">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-bold">Expert</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-400 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 fill-current" />
                    <span className="text-sm font-semibold">Therapeut</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-300/40 to-orange-300/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
              </div>
            </div>
          </div>

          {/* Marian Plat */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left - Image */}
              <div className="relative lg:order-1 order-2">
                {/* Background decorations */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl transform rotate-6 scale-110"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <Image
                    src="/images/marian-large.jpg"
                    alt="Marian Plat - Specialist hoogbegaafdheid en psychomotorisch remedial teacher"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-purple-400 to-indigo-500 text-white px-4 py-2 rounded-2xl shadow-lg transform -rotate-12">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-bold">Specialist</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-400 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-semibold">Hoogbegaafdheid</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-12 -right-8 w-20 h-20 bg-gradient-to-br from-teal-300/40 to-blue-300/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-12 -left-8 w-14 h-14 bg-gradient-to-br from-yellow-300/40 to-orange-300/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
              </div>

              {/* Right - Content */}
              <div className="relative z-10 space-y-8 lg:order-2 order-1">
                {/* Decorative background */}
                <div className="absolute -inset-8 bg-gradient-to-br from-orange-50/80 to-pink-50/80 rounded-3xl blur-xl"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 px-4 py-2 rounded-full mb-6">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-semibold">Specialist Hoogbegaafdheid</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Marian Plat
                  </h3>
                  
                  <div className="prose prose-lg max-w-none text-gray-700 mb-8 space-y-4">
                    <p>
                      Mijn naam is Marian Plat. Ik ben getrouwd en moeder van twee zoons van 18 en 15 en een 
                      dochter van 13. Naast specialist hoogbegaafdheid ben ik psychomotorisch remedial teacher 
                      en reflexintegratie behandelaar. Ik begeleid scholen met diverse hulpvragen over 
                      hoogbegaafdheid.
                    </p>
                  </div>
                  
                  {/* Expertise badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Hoogbegaafdheid</span>
                    <span className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Reflexintegratie</span>
                    <span className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Psychomotoriek</span>
                  </div>
                  
                  <Link
                    href="/over-ons/marian-plat"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span>Lees meer over Marian</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}