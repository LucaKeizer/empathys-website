import Link from 'next/link';

export default function LeveringEnRetour() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span>Levering en retour</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="w-1090%] mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Levering en retour
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Bedenktijd/retour Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bedenktijd/retour</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Het kan wel eens voorkomen dat u een bestelling retour wilt sturen. Wellicht omdat het product toch niet bevalt of misschien is er een andere reden is waarom u de bestelling toch niet zou willen hebben. Wat de reden ook is, u heeft het recht uw bestelling tot 7 dagen na ontvangst zonder opgave van reden te annuleren.
                </p>
                
                <p>
                  U heeft na annulering nogmaals 5 dagen om uw product retour te sturen. U krijgt dan het volledige orderbedrag inclusief verzendkosten gecrediteerd. Enkel de kosten voor retour van u thuis naar de webwinkel zijn voor eigen rekening. Deze kosten bedragen circa 4,60 per pakket, raadpleeg voor de exacte tarieven de website van uw vervoerder. Indien u gebruik maakt van uw herroepingsrecht, zal het product met alle geleverde toebehoren en – indien redelijkerwijze mogelijk – in de originele staat en verpakking aan de ondernemer geretourneerd worden. Om gebruik te maken van dit recht kunt u contact met ons opnemen via www.empathys.nl Wij zullen vervolgens het verschuldigde orderbedrag binnen 14 dagen na aanmelding van uw retour terugstorten mits het product reeds in goede orde retour ontvangen is.
                </p>
                
                <p>
                  Mocht het product beschadigd of de verpakking meer beschadigd zijn dan nodig is om het product te proberen, dan kunnen we deze waardevermindering van het product aan u doorberekenen. Behandel het product dus met zorg en zorg ervoor dat deze bij een retour goed verpakt is.
                </p>
              </div>
            </section>

            {/* Levertijd & verzendkosten Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Levertijd & verzendkosten</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Wij doen zorgvuldig ons best de bestelling zo spoedig mogelijk bij u af te leveren. Bestellingen die op werkdagen vóór 13.00 uur worden gedaan, proberen wij dezelfde dag nog te verzenden. Niet altijd lukt het ons echter om dit na te komen. Soms zijn producten niet voorradig en dan kan de levering van uw bestelling iets langer duren. Op de productpagina staat een indicatie van de levertijd. Mochten wij om wat voor reden dan ook deze levertijd niet halen, dan brengen wij u hier natuurlijk zo spoedig mogelijk van op de hoogte.
                </p>
                
                <p>
                  De vermelde prijzen zijn exclusief verzendkosten. De verzendkosten bedragen: €4,50 voor bestellingen die door de brievenbus passen
                </p>
                
                <p>
                  Levering verloopt via de postbode of pakketbezorger van DHL. Over het algemeen zal de aflevering de eerstvolgende werkdag tussen 9:00 en 18:00 plaatsvinden. Helaas kunnen wij het moment van aflevering niet garanderen.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Vragen over levering of retour?
              </h3>
              <p className="text-gray-600 mb-4">
                Heeft u vragen over uw bestelling, levering of wilt u een product retourneren? 
                Neem gerust contact met ons op.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact opnemen
                </Link>
                <a
                  href="mailto:info@empathys.nl"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  info@empathys.nl
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}