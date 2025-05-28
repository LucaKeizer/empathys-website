import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

export default function MelanyMolenaarStroek() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/over-ons" className="hover:text-primary-600">Over ons</Link>
          <span className="mx-2">›</span>
          <span>Melany Molenaar-Stroek</span>
        </nav>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content - Text */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Melany Molenaar-Stroek
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Mijn naam is Melany Molenaar- Stroek. Ik ben getrouwd en moeder van twee prachtige zoons. Voorheen ben ik altijd werkzaam geweest op het speciaal basisonderwijs als docent. Naast het werken als docent ben ik mezelf gaan specialiseren als{' '}
                <Link href="/contact" className="text-primary-600 underline hover:text-primary-700">
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
          
          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/melany-large.jpg"
                alt="Melany Molenaar-Stroek"
                width={500}
                height={600}
                className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-4">
              <span className="text-4xl text-primary-600 align-top leading-none">"</span>De belevingswereld van een kind is heel anders dan die van een volwassenen! 
              Speel eens met je kind en kijk naar zijn of haar spel. In spel laten kinderen heel veel zien! 
              Wat houdt hen op dit moment bezig?<span className="text-4xl text-primary-600 align-top leading-none">"</span>
            </blockquote>
            <cite className="text-gray-500 font-medium">— Melany Molenaar-Stroek</cite>
          </div>
        </div>
      </div>

      {/* Hero Section (same as homepage) */}
      <HeroSection />
    </div>
  );
}