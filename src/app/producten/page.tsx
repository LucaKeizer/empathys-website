import Link from 'next/link';

export default function Producten() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Producten</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/producten/samen-naar-de-finish">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  Samen naar de Finish
                </h3>
                <p className="text-gray-600">
                  Therapeutisch prentenboek voor kinderen en begeleiders.
                </p>
                <p className="text-secondary-600 font-semibold mt-2">€24,95</p>
              </div>
            </Link>
            
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-60">
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                Meer producten binnenkort...
              </h3>
              <p className="text-gray-400">
                We werken aan nieuwe materialen en tools.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600">
              Ons productaanbod
            </h2>
            <p className="text-gray-600 mb-4">
              Deze pagina wordt binnenkort gevuld met:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Overzicht van alle beschikbare producten</li>
              <li>Gedetailleerde productbeschrijvingen</li>
              <li>Prijzen en bestelmogelijkheden</li>
              <li>Reviews en ervaringen</li>
              <li>Bundels en combinatieaanbiedingen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}