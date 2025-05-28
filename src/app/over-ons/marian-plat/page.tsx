import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

export default function MarianPlat() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/over-ons" className="hover:text-primary-600">Over ons</Link>
          <span className="mx-2">›</span>
          <span>Marian Plat</span>
        </nav>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Content - Text */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Marian Plat
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-2">
              <p>
                Mijn naam is Marian Plat. Ik ben getrouwd en moeder van twee zoons van 18 en 15 en een dochter van 13. Naast specialist hoogbegaafdheid ben ik psychomotorisch remedial teacher en reflexintegratie behandelaar. Ik begeleid scholen met diverse hulpvragen over hoogbegaafdheid.
              </p>
              
              <p>
                Tevens werk ik op scholen met kleine groepjes om kinderen te begeleiden met een groei mindset, executieve functies en het leren leren. In mijn praktijk (www.slimvaardig.nl) werk ik individueel met kinderen en volwassenen. De hulpvragen die ik krijg zijn verschillend, o.a. concentratieproblemen, faalangst, emotieregulatie, trauma, stress, angsten e.d. Hiervoor zet ik naast coaching de lichaamsgerichte behandeling reflexintegratie in.
              </p>
              
              <p>
                Tijdens mijn opleiding Zelfstandig Talentbegeleider bij Novilo schreef ik het boek "Eerste hulp bij hoogbegaafdheid", een praktisch handboek voor ouders een leerkrachten om meer handvaten te krijgen om hoogbegaafde kinderen te begeleiden. Mijn specialisme is dubbel bijzondere kinderen: hoogbegaafdheid in combinatie met ASS, AD(H)D, dyslexie of kenmerken hiervan.
              </p>
              
              <p>
                Toen ik na mijn MRT opleiding in aanraking kwam met de reflexintegratie opleiding van Mastugova vielen er veel puzzelstukjes op zijn plek. Het niet goed doorlopen van motorische fases en primaire reflexen die niet goed zijn geÏntegreerd kunnen zoveel uitdagingen veroorzaken bij kinderen en volwassenen. Het mooie van deze methode is dat we aan de basis werken waardoor hogere vaardigheden, zoals gedrag, leren en bewegen verder kunnen ontwikkelen. Er kan al gestart worden met reflexintegratie vanaf de geboorte en is voor elke leeftijd waardoor ik nu naast kinderen ook veel volwassenen mag behandelen in mijn praktijk. Ik ben nog elke keer verbaasd over de mooie resultaten die we samen behalen.
              </p>
            </div>
          </div>
          
          {/* Right Content - Image and Video Stack */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/marian-large.jpg"
                  alt="Marian Plat"
                  width={800}
                  height={700}
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            
            {/* YouTube Video */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/q6xHfLA_uTw"
                    title="100 min en Ouder Hoogbegaafdheid - Marian Plat"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-4">
              <span className="text-4xl text-primary-600 align-top leading-none">"</span>Probeer achter het gedrag van je kind te kijken. Ongewenst, uitdagend of negatief gedrag is een schreeuw om aandacht.<span className="text-4xl text-primary-600 align-top leading-none">"</span>
            </blockquote>
            <cite className="text-gray-500 font-medium">— Marian Plat</cite>
          </div>
        </div>
      </div>

      {/* Hero Section (same as homepage) */}
      <HeroSection />
    </div>
  );
}