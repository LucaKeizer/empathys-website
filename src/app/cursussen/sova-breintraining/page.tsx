import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export default function SovaBreintraining() {
  return (
    <div className="bg-white">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Sova - breintraining
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                In deze unieke training combineren we sociale vaardigheidstraining met breintraining.
              </p>
              
              <p>
                Sociale vaardigheden zijn vaardigheden die nodig zijn om in contact te komen met andere kinderen. Deze training heeft als doel om de sociale vaardigheden van kinderen te versterken. De kinderen werken in groepjes, zodat ze door het oefenen van concrete situaties meer inzicht krijgen in zichzelf en hun omgeving. Het voordeel van het werken in groepjes is dat kinderen van elkaar leren.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="mt-8">
            <h2 className="text-1xl font-bold text-gray-900">
              Tijdens de training komen de volgende thema's aan bod:
            </h2>
            
            <ul className="space-y-1 text-base text-gray-600 mt-4">
              <li>1. Hoe ga je met elkaar om?</li>
              <li>2. Hoe onderhoud je het contact?</li>
              <li>3. Hoe spreek je iemand aan?</li>
              <li>4. Het versterken van zelfvertrouwen.</li>
              <li>5. Samen leren spelen is geven en nemen.</li>
              <li>6. Omgaan met pestgedrag.</li>
              <li>7. Emotieregulatie; boos/blij/bang/verdrietig.</li>
              <li>8. Kritiek krijgen en geven.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div>
              <h2 className="text-1xl font-bold text-gray-900 mb-6">
                Wat wordt er bedoeld met breintraining?
              </h2>
              
              <div className="text-gray-600">
                <p>
                  Tijdens de training werken we aan sociale vaardigheden, maar de kinderen worden ook uitgedaagd met het uitvoeren van motorische oefeningen. De training is uniek, omdat we kinderen cognitief en lichamelijk prikkelen.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col justify-between">
              <div className="text-gray-600 mb-6">
                <p>
                  Wij vinden het samenwerken met ouders, school (indien daar toestemming voor wordt gegeven) en het kind belangrijk. Als we allemaal dezelfde taal spreken zullen vaardigheden integreren. Onze training start met een intakegesprek. A.d.h.v het intakegesprek selecteren we het kind in een groepje. Na iedere training krijgen de ouders een uitgebreide mail met wat er is geoefend. Tussentijds voeren wij oudergesprekken en bespreken we de ontwikkeling van uw kind.
                </p>
              </div>
              
              <div className="flex justify-end">
                <Link 
                  href="/contact"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Neem contact op
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}