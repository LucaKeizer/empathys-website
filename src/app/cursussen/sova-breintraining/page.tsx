import Link from 'next/link';
import { Users, Brain, Heart, Target, MessageCircle, Calendar, MapPin, Clock } from 'lucide-react';

export default function SovaBreintraining() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/cursussen" className="hover:text-primary-600">Cursussen</Link>
          <span className="mx-2">›</span>
          <span>Sova-breintraining</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-purple-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <Brain className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">Voor kinderen en jongeren</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sova - breintraining
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unieke combinatie van sociale vaardigheidstraining en breintraining voor optimale ontwikkeling
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About the Training */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white fill-current" />
                </div>
                Over de training
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
                <p>
                  In deze unieke training combineren we sociale vaardigheidstraining met breintraining. Sociale vaardigheden zijn vaardigheden die nodig zijn om in contact te komen met andere kinderen. Deze training heeft als doel om de sociale vaardigheden van kinderen te versterken.
                </p>
                
                <p>
                  De kinderen werken in groepjes, zodat ze door het oefenen van concrete situaties meer inzicht krijgen in zichzelf en hun omgeving. Het voordeel van het werken in groepjes is dat kinderen van elkaar leren. Tijdens de training werken we aan sociale vaardigheden, maar de kinderen worden ook uitgedaagd met het uitvoeren van motorische oefeningen.
                </p>
              </div>
            </div>

            {/* Training Topics */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                Thema's in de training
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">1</span>
                    </div>
                    <p className="text-gray-700">Hoe ga je met elkaar om?</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">2</span>
                    </div>
                    <p className="text-gray-700">Hoe onderhoud je het contact?</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <p className="text-gray-700">Hoe spreek je iemand aan?</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">4</span>
                    </div>
                    <p className="text-gray-700">Het versterken van zelfvertrouwen</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">5</span>
                    </div>
                    <p className="text-gray-700">Samen leren spelen is geven en nemen</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">6</span>
                    </div>
                    <p className="text-gray-700">Omgaan met pestgedrag</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">7</span>
                    </div>
                    <p className="text-gray-700">Emotieregulatie; boos/blij/bang/verdrietig</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">8</span>
                    </div>
                    <p className="text-gray-700">Kritiek krijgen en geven</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brain Training Explanation */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                Wat is breintraining?
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
                <p>
                  Tijdens de training werken we aan sociale vaardigheden, maar de kinderen worden ook uitgedaagd met het uitvoeren van motorische oefeningen. De training is uniek, omdat we kinderen cognitief en lichamelijk prikkelen.
                </p>
                
                <p>
                  Wij vinden het samenwerken met ouders, school (indien daar toestemming voor wordt gegeven) en het kind belangrijk. Als we allemaal dezelfde taal spreken zullen vaardigheden integreren. Onze training start met een intakegesprek. A.d.h.v het intakegesprek selecteren we het kind in een groepje. Na iedere training krijgen de ouders een uitgebreide mail met wat er is geoefend. Tussentijds voeren wij oudergesprekken en bespreken we de ontwikkeling van uw kind.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Training Info */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Training informatie</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-purple-100 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Groepsgrootte</h4>
                    <p className="text-purple-100">Kleine groepjes</p>
                    <p className="text-purple-100 text-sm">Kinderen leren van elkaar</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Brain className="h-6 w-6 text-purple-100 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Aanpak</h4>
                    <p className="text-purple-100">Cognitief én lichamelijk</p>
                    <p className="text-purple-100 text-sm">Unieke combinatie</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-6 w-6 text-purple-100 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Communicatie</h4>
                    <p className="text-purple-100">Uitgebreide rapportage</p>
                    <p className="text-purple-100 text-sm">Na elke sessie + oudergesprekken</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Voordelen van de training</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Verbeterde sociale vaardigheden</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Meer zelfvertrouwen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Betere emotieregulatie</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Motorische ontwikkeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Leren van leeftijdsgenoten</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interesse in de training?</h3>
              <p className="text-gray-600 mb-6">Neem contact op voor een intakegesprek en meer informatie over de mogelijkheden.</p>
              
              <Link 
                href="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}