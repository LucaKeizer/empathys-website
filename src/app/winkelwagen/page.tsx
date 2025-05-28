export default function Winkelwagen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Winkelwagen</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-600">
                Je winkelwagen is leeg
              </h2>
              <p className="text-gray-500 mb-6">
                Voeg producten toe om te beginnen met bestellen.
              </p>
              
              <button className="btn btn-primary">
                Bekijk onze producten
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-primary-600">
                Functionaliteit in ontwikkeling
              </h3>
              <p className="text-gray-600 mb-4">
                De winkelwagen wordt binnenkort gevuld met:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Overzicht van toegevoegde producten</li>
                <li>Aantal aanpassen en producten verwijderen</li>
                <li>Totaalbedrag berekening</li>
                <li>Verzendkosten informatie</li>
                <li>Checkout functionaliteit</li>
                <li>Betaalmogelijkheden</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}