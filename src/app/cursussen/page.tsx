import Link from 'next/link';

export default function Cursussen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cursussen</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/cursussen/oudercursus">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  Oudercursus
                </h3>
                <p className="text-gray-600">
                  Voor ouders die hun kind beter willen begrijpen en begeleiden.
                </p>
              </div>
            </Link>
            
            <Link href="/cursussen/sova-breintraining">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  Sova - Breintraining
                </h3>
                <p className="text-gray-600">
                  Gespecialiseerde training voor cognitieve ontwikkeling.
                </p>
              </div>
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600">
              Ons cursusaanbod
            </h2>
            <p className="text-gray-600 mb-4">
              Deze pagina wordt binnenkort gevuld met informatie over:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Overzicht van alle beschikbare cursussen</li>
              <li>Doelgroepen en leerdoelen</li>
              <li>Cursusdata en locaties</li>
              <li>Prijzen en inschrijvingsinformatie</li>
              <li>Certificeringen en accreditaties</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}