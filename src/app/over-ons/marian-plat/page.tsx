import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import { Award, BookOpen, Users, Heart, Play, Phone, Mail, Globe, Sparkles } from 'lucide-react';

export default function MarianPlat() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/over-ons" className="hover:text-primary-600 transition-colors">Over ons</Link>
          <span className="mx-2">›</span>
          <span>Marian Plat</span>
        </nav>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Content - Text */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 px-4 py-2 rounded-full mb-6 shadow-sm">
                <Award className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-800">Specialist Hoogbegaafdheid</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Marian Plat
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Specialist hoogbegaafdheid, psychomotorisch remedial teacher en reflexintegratie behandelaar
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
                  Over Marian
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
                  <p>
                    Mijn naam is Marian Plat. Ik ben getrouwd en moeder van twee zoons van 18 en 15 en een dochter van 13. Naast specialist hoogbegaafdheid ben ik psychomotorisch remedial teacher en reflexintegratie behandelaar. Ik begeleid scholen met diverse hulpvragen over hoogbegaafdheid.
                  </p>
                  
                  <p>
                    Tevens werk ik op scholen met kleine groepjes om kinderen te begeleiden met een groei mindset, executieve functies en het leren leren. In mijn praktijk (www.slimvaardig.nl) werk ik individueel met kinderen en volwassenen. De hulpvragen die ik krijg zijn verschillend, o.a. concentratieproblemen, faalangst, emotieregulatie, trauma, stress, angsten e.d. Hiervoor zet ik naast coaching de lichaamsgerichte behandeling reflexintegratie in.
                  </p>
                </div>
              </div>

              {/* Expertise Section */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  Expertise & Ervaring
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
                  <p>
                    Tijdens mijn opleiding Zelfstandig Talentbegeleider bij Novilo schreef ik het boek "Eerste hulp bij hoogbegaafdheid", een praktisch handboek voor ouders een leerkrachten om meer handvaten te krijgen om hoogbegaafde kinderen te begeleiden. Mijn specialisme is dubbel bijzondere kinderen: hoogbegaafdheid in combinatie met ASS, AD(H)D, dyslexie of kenmerken hiervan.
                  </p>
                  
                  <p>
                    Toen ik na mijn MRT opleiding in aanraking kwam met de reflexintegratie opleiding van Mastugova vielen er veel puzzelstukjes op zijn plek. Het niet goed doorlopen van motorische fases en primaire reflexen die niet goed zijn geÏntegreerd kunnen zoveel uitdagingen veroorzaken bij kinderen en volwassenen. Het mooie van deze methode is dat we aan de basis werken waardoor hogere vaardigheden, zoals gedrag, leren en bewegen verder kunnen ontwikkelen. Er kan al gestart worden met reflexintegratie vanaf de geboorte en is voor elke leeftijd waardoor ik nu naast kinderen ook veel volwassenen mag behandelen in mijn praktijk. Ik ben nog elke keer verbaasd over de mooie resultaten die we samen behalen.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  Specialisaties
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Hoogbegaafdheid</h3>
                    <p className="text-gray-600 leading-relaxed">Specialist in het begeleiden van hoogbegaafde kinderen en dubbel bijzondere kinderen</p>
                  </div>
                  
                  <div className="group text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Heart className="h-8 w-8 text-white fill-current" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Reflexintegratie</h3>
                    <p className="text-gray-600 leading-relaxed">Lichaamsgerichte behandeling voor alle leeftijden vanaf de geboorte</p>
                  </div>
                  
                  <div className="group text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border border-teal-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Psychomotoriek</h3>
                    <p className="text-gray-600 leading-relaxed">Remedial teacher voor motorische ontwikkeling en leren leren</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image and Video Stack */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/40 to-pink-200/40 rounded-3xl blur-2xl transform rotate-6 scale-110"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <Image
                    src="/images/marian-large.jpg"
                    alt="Marian Plat"
                    width={800}
                    height={700}
                    className="w-full rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg transform rotate-12 animate-pulse">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-bold">Expert</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-500 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-bold">Specialist</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-300/40 to-orange-300/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
              </div>
            </div>
            
            {/* YouTube Video */}
            <div className="w-full">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Play className="h-5 w-5 text-white fill-current" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Interview over Hoogbegaafdheid</h3>
                </div>
                
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/q6xHfLA_uTw"
                    title="100 min en Ouder Hoogbegaafdheid - Marian Plat"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Marian vertelt over hoogbegaafdheid en de uitdagingen die kinderen ervaren in hun ontwikkeling.
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Contact met Marian</h3>
              </div>
              
              <p className="text-teal-100 mb-6 leading-relaxed">
                Wilt u meer weten over hoogbegaafdheid of reflexintegratie? Neem contact op voor een persoonlijk adviesgesprek!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-teal-200" />
                  <a href="https://www.slimvaardig.nl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200 transition-colors underline">www.slimvaardig.nl</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal-200" />
                  <a href="mailto:marianplat1973@gmail.com" className="text-white hover:text-teal-200 transition-colors">marianplat1973@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-teal-200" />
                  <a href="tel:+31652037753" className="text-white hover:text-teal-200 transition-colors">+31 6 5203 7753</a>
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
            <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-orange-50 rounded-3xl p-12 lg:p-16 border border-orange-100 shadow-xl">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="h-10 w-10 text-white fill-current" />
                </div>
              </div>
              
              <blockquote className="text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed mb-8">
                <span className="text-5xl text-orange-500 align-top leading-none font-serif">"</span>
                Probeer achter het gedrag van je kind te kijken. Ongewenst, uitdagend of negatief gedrag is een schreeuw om aandacht.
                <span className="text-5xl text-orange-500 align-top leading-none font-serif">"</span>
              </blockquote>
              
              <cite className="text-orange-600 font-bold text-xl">— Marian Plat</cite>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section (same as homepage) */}
      <HeroSection />
    </div>
  );
}