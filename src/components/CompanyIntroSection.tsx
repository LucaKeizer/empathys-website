'use client';

import Image from 'next/image';
import Link from 'next/link';

const CompanyIntroSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Empathys
            </h2>
            <div className="text-gray-600 mb-8 space-y-4">
              <p>
                Empathys is opgezet door Marian Plat en Melany Molenaar-Stroek. Empathys staat voor verbinding en vertrouwen. Vanuit Empathys organiseren wij trainingen voor kinderen (sova-breintraining), professionals en ouders.
              </p>
              <p>
                Onze oudercursus 'Leer het gedrag van je kind beter te begrijpen en lezen' organiseren wij meerdere keren per jaar. Wij zullen nog meer cursussen ontwikkelen. Samen hebben wij ook een{' '}
                <Link href="/prentenboek" className="text-primary-600 underline hover:text-primary-700">
                  therapeutisch prentenboek
                </Link>
                {' '}geschreven en ontwikkelen we spelmateriaal.
              </p>
            </div>
            
            <Link href="/over-ons">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200">
                Lees meer over ons
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/melany-marian.jpg"
                alt="Melany Molenaar-Stroek en Marian Plat"
                width={400}
                height={400}
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;