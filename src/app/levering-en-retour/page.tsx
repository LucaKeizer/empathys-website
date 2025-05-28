export default function LeveringEnRetour() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Levering en Retour</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-600">
                Levering
              </h2>
              <p className="text-gray-600 mb-4">
                Deze sectie wordt binnenkort gevuld met informatie over:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Verzendkosten en levertijden</li>
                <li>Bezorgopties binnen Nederland</li>
                <li>Internationale verzending</li>
                <li>Tracking van bestellingen</li>
                <li>Afhaalopties</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-600">
                Retour en Ruilen
              </h2>
              <p className="text-gray-600 mb-4">
                Deze sectie wordt binnenkort gevuld met informatie over:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Retourbeleid en termijnen</li>
                <li>Procedure voor het retourneren van producten</li>
                <li>Staat waarin producten geretourneerd moeten worden</li>
                <li>Terugbetaling en verwerkingstijd</li>
                <li>Ruilen van producten</li>
                <li>Kosten voor retourzending</li>
              </ul>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                <strong>Voor vragen over levering of retour:</strong><br />
                Neem contact op via info@empathys.nl of bel tijdens openingstijden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}