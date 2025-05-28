import Link from 'next/link';
import Image from 'next/image';
import Timeline from '@/components/Timeline';

export default function OverOns() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span>Over ons</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Content - Text */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Wie zijn wij?
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Empathys is opgezet door Marian Plat en Melany Molenaar-Stroek. Empathys staat voor verbinding en vertrouwen. Vanuit Empathys organiseren wij trainingen voor kinderen (sova-breintraining), professionals en ouders.
              </p>
              
              <p>
                Onze oudercursus 'Leer het gedrag van je kind beter te begrijpen en lezen' organiseren wij meerdere keren per jaar. Wij zullen nog meer cursussen ontwikkelen. Samen hebben wij ook een{' '}
                <Link href="/producten/samen-naar-de-finish" className="text-primary-600 underline hover:text-primary-700">
                  therapeutisch prentenboek
                </Link>
                {' '}geschreven en ontwikkelen we spelmateriaal.
              </p>
              
              <p>
                Marian Plat is specialist hoogbegaafdheid, psychomotorisch remedial teacher en reflexintegratie behandelaar. Melany Molenaar-Stroek werkt als kinder- en jeugdtherapeut en begeleid kinderen met gedrag- en sociale emotionele problemen. Wij versterken elkaar tijdens trainingen en cursussen, omdat we allebei onze eigen expertise hebben, maar het delen van onze kennis en ervaringen zorgt ervoor dat we vanuit verschillende brillen naar kinderen kunnen kijken, en elkaar heel mooi aanvullen. Zowel sociaal- emotioneel, lichaamsgericht en cognitief versterken we elkaar.
              </p>
              
              <p>
                Met behulp van het therapeutisch{' '}
                <Link href="/producten/samen-naar-de-finish" className="text-primary-600 underline hover:text-primary-700">
                  prentenboek "Samen naar de finish"
                </Link>
                {' '}kun je als ouder of professional het kind helpen zijn of haar binnenwereld onder woorden te brengen, zodat ze zichzelf beter leren kennen. Als ouder of professional krijg je inzicht over de binnenwereld van het kind. Wat gaat er in het kind om en waar loopt het kind tegenaan? In het boek zitten allerlei thema's verwerkt. Thema's zoals: mindset, talenten en kwaliteiten, winnen en verliezen, omgaan met teleurstellingen en emotieregulatie.{' '}
                <Link href="/producten/samen-naar-de-finish" className="text-primary-600 underline hover:text-primary-700">
                  Bestel het hier!
                </Link>
              </p>
            </div>
          </div>
          
          {/* Right Content - Profile Images */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Melany Profile */}
            <div className="text-center">
              <Link href="/over-ons/melany-molenaar-stroek" className="block group">
                <div className="relative mb-4">
                  <Image
                    src="/images/melany-profile.jpg"
                    alt="Melany Molenaar-Stroek"
                    width={300}
                    height={300}
                    className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-200"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Melany Molenaar-Stroek
                </h3>
              </Link>
            </div>
            
            {/* Marian Profile */}
            <div className="text-center">
              <Link href="/over-ons/marian-plat" className="block group">
                <div className="relative mb-4">
                  <Image
                    src="/images/marian-profile.jpg"
                    alt="Marian Plat"
                    width={300}
                    height={300}
                    className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-200"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Marian Plat
                </h3>
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <Timeline />
    </div>
  );
}