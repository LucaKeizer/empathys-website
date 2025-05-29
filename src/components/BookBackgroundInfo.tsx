import Image from 'next/image';

export default function BookBackgroundInfo() {
  return (
    <>
      {/* Background Information Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Achtergrond informatie
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="flex justify-center">
                <Image
                  src="/images/book-image-1.jpg"
                  alt="Therapeutisch prentenboek illustratie"
                  width={800}
                  height={650}
                  className="w-full max-w-xl rounded-lg shadow-lg"
                />
              </div>
              
              {/* Right Column - Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Wat maakt ons boekje therapeutisch?
                </h3>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Als therapeuten hebben wij ons prentenboek met een doel geschreven. Wij vinden het 
                    belangrijk dat kinderen leren om over hun gevoelens te praten, hun eigen talenten en 
                    kwaliteiten ontdekken, op een positieve manier leren denken, van anderen kunnen leren 
                    en meer vertrouwen krijgen in zichzelf. Ons boek is meer dan alleen een prentenboek.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connection and Brain Development Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column - In verbinding met het kind */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  In verbinding met het kind
                </h3>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Voorlezen zorgt voor een rustmoment samen met het kind. Het kind geniet van de 
                    aandacht en luistert naar het verhaal. Het verhaal nodigt de kinderen uit om antwoord 
                    te geven op verschillende vragen. Hoe ervaart het kind de wereld om zich heen? Kinderen 
                    denken op kindniveau en ervaren situaties op een heel andere manier. Als je de wereld 
                    door de bril van het kind kan bekijken zorg je voor verbinding en kunnen situaties op 
                    kindniveau worden opgelost. Op deze manier leren ze het meest!
                  </p>
                </div>
              </div>

              {/* Right Column - Het kinderbrein */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Het kinderbrein
                </h3>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Het kinderbrein is nog in ontwikkeling. Vanuit emotionele veiligheid is een kind 
                    optimaal in staat om te ontwikkelen. Hoe meer de hersenen van kinderen worden 
                    gestimuleerd en uitgedaagd, hoe meer de hersenen zich ontwikkelen. Alles wat je tegen 
                    een kind zegt, hoe je een kind benaderd, jouw manier van handelen, de omgevingsfactoren 
                    en situaties heeft invloed op de ontwikkeling van het kinderbrein. Als professional en 
                    ouder ben je het grootste voorbeeld van het kind. Het therapeutisch prentenboek 
                    stimuleert het kind om op een positieve manier over zichzelf na te denken en als 
                    ouder/professional help je het kind daarbij.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/* Themes Section */}
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Themes Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Verwerkte thema's in het boek
              </h3>
              <p className="text-gray-600 mb-4">
                De thema's die in het boek aan bod komen zijn:
              </p>
              <div className="prose prose-lg max-w-none text-gray-600">
                <ol className="list-decimal pl-5 space-y-0.5">
                  <li>Emoties zoals blij, boos, verdrietig, bang, verlegen;</li>
                  <li>Je grens leren aangeven;</li>
                  <li>Negatieve gedachten ombuigen naar positieve gedachten;</li>
                  <li>Doorzetten op het moment dat je denkt dat het niet gaat lukken;</li>
                  <li>Talenten: ieder heeft zijn eigen talenten. Jezelf niet vergelijken met een ander maar je eigen kwaliteiten ontdekken en laten groeien;</li>
                  <li>Samenwerken en leren van elkaar;</li>
                  <li>Hulp vragen aan anderen;</li>
                  <li>Mindset: hoe ga je om met tegenslagen? Wil je altijd de beste en snelste zijn of durf je uit je comfortzone te komen en nieuwe dingen te leren en fouten te maken;</li>
                  <li>Zelfreflectie en zelfvertrouwen ontwikkelen.</li>
                </ol>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/book-image-2.jpg"
                alt="Prentenboek thema's illustratie"
                width={800}
                height={650}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}