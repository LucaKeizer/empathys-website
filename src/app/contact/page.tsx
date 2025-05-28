export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600">
              Neem contact met ons op
            </h2>
            <p className="text-gray-600 mb-4">
              Deze pagina wordt binnenkort gevuld met:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Contactformulier</li>
              <li>Telefoonnummer en e-mailadres</li>
              <li>Adres en routebeschrijving</li>
              <li>Openingstijden</li>
              <li>Veelgestelde vragen</li>
              <li>Social media links</li>
            </ul>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                <strong>Tijdelijk contact:</strong><br />
                Voor vragen kunt u contact opnemen via de informatie in de footer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}