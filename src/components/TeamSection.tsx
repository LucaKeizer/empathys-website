import Link from 'next/link';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Melany Molenaar-Stroek */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Left - Content */}
              <div className="relative z-10 bg-gray-100 rounded-3xl p-8 lg:p-12">
                {/* Decorative circle */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-200 rounded-full"></div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Melany Molenaar-Stroek
                </h3>
                
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Mijn naam is Melany Molenaar- Stroek. Ik ben getrouwd en moeder van twee prachtige zoons. 
                    Voorheen ben ik altijd werkzaam geweest op het speciaal basisonderwijs als docent. Naast het 
                    werken als docent ben ik mezelf gaan specialiseren als{' '}
                    <a href="https://www.kinderpraktijkmelany.nl/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">kinder- en jeugdtherapeut</a>.
                  </p>
                </div>
                
                <Link
                  href="/over-ons/melany-molenaar-stroek"
                  className="inline-block bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200 border border-gray-300 hover:border-gray-400"
                >
                  Lees meer
                </Link>
              </div>

              {/* Right - Image */}
              <div className="relative">
                {/* Main decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-12 -right-16 w-48 h-48 bg-gray-100 rounded-full opacity-40"></div>
                
                <div className="relative z-10">
                  <Image
                    src="/images/melany-large.jpg"
                    alt="Melany Molenaar-Stroek - Kinder- en jeugdtherapeut"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Marian Plat */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Left - Image */}
              <div className="relative lg:order-1 order-2">
                {/* Decorative circles */}
                <div className="absolute -top-12 -left-8 w-40 h-40 bg-gray-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-8 -left-12 w-24 h-24 bg-gray-200 rounded-full opacity-70"></div>
                
                <div className="relative z-10">
                  <Image
                    src="/images/marian-large.jpg"
                    alt="Marian Plat - Specialist hoogbegaafdheid en psychomotorisch remedial teacher"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="relative z-10 bg-gray-100 rounded-3xl p-8 lg:p-12 lg:order-2 order-1">
                {/* Decorative circle */}
                <div className="absolute -bottom-8 right-8 w-20 h-20 bg-gray-200 rounded-full"></div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Marian Plat
                </h3>
                
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Mijn naam is Marian Plat. Ik ben getrouwd en moeder van twee zoons van 18 en 15 en een 
                    dochter van 13. Naast specialist hoogbegaafdheid ben ik psychomotorisch remedial teacher 
                    en reflexintegratie behandelaar. Ik begeleid scholen met diverse hulpvragen over 
                    hoogbegaafdheid.
                  </p>
                </div>
                
                <Link
                  href="/over-ons/marian-plat"
                  className="inline-block bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200 border border-gray-300 hover:border-gray-400"
                >
                  Lees meer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}