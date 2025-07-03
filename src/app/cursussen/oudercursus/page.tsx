import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { Heart, Users, BookOpen, MapPin, Clock, Calendar } from 'lucide-react';

export default function Oudercursus() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/cursussen" className="hover:text-primary-600">Cursussen</Link>
          <span className="mx-2">›</span>
          <span>Oudercursus</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-orange-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <Heart className="h-4 w-4 text-orange-600 fill-current" />
            <span className="text-sm font-semibold text-orange-800">Voor ouders en verzorgers</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Oudercursus
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leer het gedrag van je kind beter te begrijpen en krijg praktische handvatten voor meer bewuste opvoeding
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About the Course */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                Over de cursus
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
                <p>
                  Opvoeding is een leuke uitdaging, maar kan ook lastig zijn. Wij hebben een cursus ontwikkelt om het gedrag van je kind beter te leren begrijpen. Tijdens de cursus krijg je als ouder(s) meer handvatten, tools, inzichten en vertrouwen in het opvoeden. De cursus zorgt voor meer bewuste opvoeding.
                </p>
                
                <p>
                  Een leuke toevoeging van de cursus is, dat je meteen gericht aan het werk kunt met ons geschreven prentenboek voor kinderen. We hebben een therapeutisch prentenboek geschreven om de binnenwereld van je kind beter te leren begrijpen, meer verbinding te krijgen en samen te leren hoe je emoties reguleert. Het prentenboek is geschikt voor de leeftijd van 4 tot 8 jaar.
                </p>
              </div>
            </div>

            {/* Course Topics */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                Wat komt er aan bod
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-sm">1</span>
                    </div>
                    <p className="text-gray-700">Het kinderbrein; hoe werkt het brein van een kind en hoe speel je daar op in?</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-sm">2</span>
                    </div>
                    <p className="text-gray-700">Mijn kind heeft woedeaanvallen. Hoe pak ik dat aan en hoe ga ik daar mee om?</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-sm">3</span>
                    </div>
                    <p className="text-gray-700">Mijn kind is hooggevoelig en ik ben continu bezig met een strijd. Wat heeft mijn kind nodig?</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-sm">4</span>
                    </div>
                    <p className="text-gray-700">Mijn kind vertelt nooit iets en dat maakt mij onzeker.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-sm">5</span>
                    </div>
                    <p className="text-gray-700">Mijn kind heeft faalangst. Hoe kan ik als ouder daar het beste op reageren.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">6</span>
                    </div>
                    <p className="text-gray-700">Ik ben als ouder onzeker: doe ik het allemaal wel goed!</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">7</span>
                    </div>
                    <p className="text-gray-700">Wat is positief opvoeden en wanneer sta je als ouder in je kracht? We leren je alles over praten in groeitaal. We leren je het gedrag van je kind beter begrijpen.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">8</span>
                    </div>
                    <p className="text-gray-700">Mijn kind voelt geen grenzen hoe ga je daar mee om?</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">9</span>
                    </div>
                    <p className="text-gray-700">Mijn kind maakt moeilijk contact. Hoe kan ik dat als ouder het beste begeleiden?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Course Info */}
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Praktische informatie</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-orange-100 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Duur</h4>
                    <p className="text-orange-100">2 avonden/middagen</p>
                    <p className="text-orange-100 text-sm">2 tot 2,5 uur per sessie</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-orange-100 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Locatie</h4>
                    <p className="text-orange-100">Parallelweg 56</p>
                    <p className="text-orange-100">Volendam</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-orange-100 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Inclusief</h4>
                    <p className="text-orange-100">Therapeutisch prentenboek</p>
                    <p className="text-orange-100 text-sm">Voor kinderen 4-8 jaar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interesse in de cursus?</h3>
              <p className="text-gray-600 mb-6">Neem contact op voor meer informatie of om je aan te melden voor de volgende cursus.</p>
              
              <Link 
                href="/contact"
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}