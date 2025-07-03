import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import { Heart, BookOpen, Users, Award, Sparkles, Phone, Mail, Star, Play } from 'lucide-react';

export default function MelanyMolenaarStroek() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/over-ons" className="hover:text-primary-600 transition-colors">Over ons</Link>
          <span className="mx-2">›</span>
          <span>Melany Molenaar-Stroek</span>
        </nav>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content - Text */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                <Heart className="h-4 w-4 text-teal-600 fill-current" />
                <span className="text-sm font-semibold text-teal-800">Kinder- & Jeugdtherapeut</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Melany Molenaar-Stroek
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Kinder- en jeugdtherapeut gespecialiseerd in sociale-emotionele en gedragsproblemen
              </p>
            </div>
            
            {/* Content Cards */}
            <div className="space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  Over Melany
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
                  <p>
                    Mijn naam is Melany Molenaar- Stroek. Ik ben getrouwd en moeder van twee prachtige zoons. Voorheen ben ik altijd werkzaam geweest op het speciaal basisonderwijs als docent. Naast het werken als docent ben ik mezelf gaan specialiseren als{' '}
                    <Link href="/contact" className="text-teal-600 font-semibold hover:text-teal-700 underline decoration-2 underline-offset-2 transition-colors">
                      kinder- en jeugdtherapeut
                    </Link>
                    .
                  </p>
                  
                  <p>
                    Het werken met kinderen en jongeren geeft mij veel energie. Als kinder- en jeugdtherapeut begeleid ik kinderen van 4 t/m 18 jaar met sociale-emotionele en gedragsproblemen. Een kinder- en jeugdtherapeut ondersteunt en helpt het kind bij het ontdekken van de eigen kwaliteiten en mogelijkheden. Ik laat de kinderen, a.d.h.v. verschillende methodieken, ervaren hoe ze de kwaliteiten en mogelijkheden kunnen inzetten in het dagelijkse leven.
                  </p>
                  
                  <p>
                    Als therapeut wordt er gekeken naar wat het kind nodig heeft en probeert te vertellen via zijn of haar gedrag. Gedrag heeft altijd een positieve intentie ook al lijkt dat soms niet zo. Ik vind het belangrijk dat er achter het gedrag van het kind wordt gekeken.
                  </p>
                </div>
              </div>

              {/* Approach Section - Moved to left column */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  Werkwijze
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Achter het gedrag kijken</h3>
                      <p className="text-gray-600">Ik geloof dat gedrag altijd een positieve intentie heeft en zoek naar wat het kind werkelijk probeert te communiceren.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Kwaliteiten ontdekken</h3>
                      <p className="text-gray-600">Samen met het kind ontdek ik hun unieke talenten en leer ze hoe ze deze kunnen inzetten in het dagelijks leven.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Praktische methodieken</h3>
                      <p className="text-gray-600">Door verschillende therapeutische methodieken help ik kinderen om hun mogelijkheden optimaal te benutten.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content - Image and Cards */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200/40 to-blue-200/40 rounded-3xl blur-2xl transform -rotate-6 scale-110"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <Image
                    src="/images/melany-large.jpg"
                    alt="Melany Molenaar-Stroek"
                    width={500}
                    height={600}
                    className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-teal-500 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg transform -rotate-12 animate-pulse">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 fill-current" />
                    <span className="text-sm font-bold">Therapeut</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-bold">Expert</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-300/40 to-orange-300/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
              </div>
            </div>


            {/* Contact Card */}
            <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Contact met Melany</h3>
              </div>
              
              <p className="text-teal-100 mb-6 leading-relaxed">
                Wilt u meer weten over kindertherapie of heeft u vragen over de ontwikkeling van uw kind? Neem contact op voor een vrijblijvend gesprek!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal-200" />
                  <a href="mailto:info@kinderpraktijkmelany.nl" className="text-white hover:text-teal-200 transition-colors">info@kinderpraktijkmelany.nl</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-teal-200" />
                  <a href="tel:+31651278117" className="text-white hover:text-teal-200 transition-colors">+31 6 5127 8117</a>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-white fill-current" />
                </div>
                Hulpvragen
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Sociale-emotionele problemen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Gedragsproblemen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Faalangst en zelfvertrouwen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Sociale vaardigheden</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Emotieregulatie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-teal-50 rounded-3xl p-12 lg:p-16 border border-teal-100 shadow-xl">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Play className="h-10 w-10 text-white fill-current" />
                </div>
              </div>
              
              <blockquote className="text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed mb-8">
                <span className="text-5xl text-teal-500 align-top leading-none font-serif">"</span>
                De belevingswereld van een kind is heel anders dan die van een volwassenen! 
                Speel eens met je kind en kijk naar zijn of haar spel. In spel laten kinderen heel veel zien! 
                Wat houdt hen op dit moment bezig?
                <span className="text-5xl text-teal-500 align-top leading-none font-serif">"</span>
              </blockquote>
              
              <cite className="text-teal-600 font-bold text-xl">— Melany Molenaar-Stroek</cite>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section (same as homepage) */}
      <HeroSection />
    </div>
  );
}