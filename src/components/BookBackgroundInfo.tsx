import Image from 'next/image';
import { Heart, Brain, Sparkles, BookOpen } from 'lucide-react';

export default function BookBackgroundInfo() {
  return (
    <>
      {/* What makes our book therapeutic */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-3xl blur-2xl transform rotate-6"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                    <Image
                      src="/images/book-image-1.jpg"
                      alt="Therapeutisch prentenboek illustratie"
                      width={800}
                      height={650}
                      className="w-full max-w-xl rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-br from-teal-500 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-sm font-bold">Therapeutisch</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div>
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white fill-current" />
                    </div>
                    Wat maakt ons boekje therapeutisch?
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    <p>
                      Als therapeuten hebben wij ons prentenboek met een doel geschreven. Wij vinden het 
                      belangrijk dat kinderen leren om over hun gevoelens te praten, hun eigen talenten en 
                      kwaliteiten ontdekken, op een positieve manier leren denken, van anderen kunnen leren 
                      en meer vertrouwen krijgen in zichzelf. Ons boek is meer dan alleen een prentenboek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connection and Brain Development Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Column - In verbinding met het kind */}
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-white fill-current" />
                  </div>
                  In verbinding met het kind
                </h3>
                
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    Voorlezen zorgt voor een rustmoment samen met het kind. Het kind geniet van de 
                    aandacht en luistert naar het verhaal. Het verhaal nodigt de kinderen uit om antwoord 
                    te geven op verschillende vragen. Hoe ervaart het kind de wereld om zich heen? Kinderen 
                    denken op kindniveau en ervaren situaties op een heel andere manier. Als je de wereld 
                    door de bril van het kind kan bekijken zorg je voor verbinding en kunnen situaties op 
                    kindniveau worden opgelost. Op deze manier leren ze het meest!
                  </p>
                </div>
              </div>

              {/* Right Column - Het kinderbrein */}
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  Het kinderbrein
                </h3>
                
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    Het kinderbrein is nog in ontwikkeling. Vanuit emotionele veiligheid is een kind 
                    optimaal in staat om te ontwikkelen. Hoe meer de hersenen van kinderen worden 
                    gestimuleerd en uitgedaagd, hoe meer de hersenen zich ontwikkelen. Alles wat je tegen 
                    een kind zegt, hoe je een kind benaderd, jouw manier van handelen, de omgevingsfactoren 
                    en situaties heeft invloed op de ontwikkeling van het kinderbrein. Als professional en 
                    ouder ben je het grootste voorbeeld van het kind. Het therapeutisch prentenboek 
                    stimuleert het kind om op een positieve manier over zichzelf na te denken en als 
                    ouder/professional help je het kind daarbij.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Themes Section */}
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Themes Content */}
              <div>
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    Verwerkte thema's in het boek
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    De thema's die in het boek aan bod komen zijn:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-teal-600 font-bold text-xs">1</span>
                      </div>
                      <p className="text-gray-700">Emoties zoals blij, boos, verdrietig, bang, verlegen</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-orange-600 font-bold text-xs">2</span>
                      </div>
                      <p className="text-gray-700">Je grens leren aangeven</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-xs">3</span>
                      </div>
                      <p className="text-gray-700">Negatieve gedachten ombuigen naar positieve gedachten</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-xs">4</span>
                      </div>
                      <p className="text-gray-700">Doorzetten op het moment dat je denkt dat het niet gaat lukken</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-pink-600 font-bold text-xs">5</span>
                      </div>
                      <p className="text-gray-700">Talenten: ieder heeft zijn eigen talenten. Jezelf niet vergelijken met een ander maar je eigen kwaliteiten ontdekken en laten groeien</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-xs">6</span>
                      </div>
                      <p className="text-gray-700">Samenwerken en leren van elkaar</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-yellow-600 font-bold text-xs">7</span>
                      </div>
                      <p className="text-gray-700">Hulp vragen aan anderen</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-indigo-600 font-bold text-xs">8</span>
                      </div>
                      <p className="text-gray-700">Mindset: hoe ga je om met tegenslagen? Wil je altijd de beste en snelste zijn of durf je uit je comfortzone te komen en nieuwe dingen te leren en fouten te maken</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 font-bold text-xs">9</span>
                      </div>
                      <p className="text-gray-700">Zelfreflectie en zelfvertrouwen ontwikkelen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-3xl blur-2xl transform -rotate-6"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                    <Image
                      src="/images/book-image-2.jpg"
                      alt="Prentenboek thema's illustratie"
                      width={800}
                      height={650}
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span className="text-sm font-bold">9 Thema's</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}