import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export default function Oudercursus() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/cursussen" className="hover:text-primary-600">Cursussen</Link>
          <span className="mx-2">›</span>
          <span>Oudercursus</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Oudercursus
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Opvoeding is een leuke uitdaging, maar kan ook lastig zijn.
              </p>
              
              <p>
                Wij hebben een cursus ontwikkelt om het gedrag van je kind beter te leren begrijpen. Tijdens de cursus krijg je als ouder(s) meer handvatten, tools, inzichten en vertrouwen in het opvoeden. De cursus zorgt voor meer bewuste opvoeding.
              </p>
              
              <p>
                Een leuke toevoeging van de cursus is, dat je meteen gericht aan het werk kunt met ons geschreven prentenboek voor kinderen. We hebben een therapeutisch prentenboek geschreven om de binnenwereld van je kind beter te leren begrijpen, meer verbinding te krijgen en samen te leren hoe je emoties reguleert. Het prentenboek is geschikt voor de leeftijd van 4 tot 8 jaar.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="mt-8">
            <h2 className="text-1xl font-bold text-gray-900 mb-6">
              Wat komt er tijdens de cursus aan bod:
            </h2>
            
            <ul className="space-y-1 text-base text-gray-600">
              <li>1. Het kinderbrein; hoe werkt het brein van een kind en hoe speel je daar op in?</li>
              <li>2. Mijn kind heeft woedeaanvallen. Hoe pak ik dat aan en hoe ga ik daar mee om?</li>
              <li>3. Mijn kind is hooggevoelig en ik ben continu bezig met een strijd. Wat heeft mijn kind nodig?</li>
              <li>4. Mijn kind vertelt nooit iets en dat maakt mij onzeker.</li>
              <li>5. Mijn kind heeft faalangst. Hoe kan ik als ouder daar het beste op reageren.</li>
              <li>6. Ik ben als ouder onzeker: doe ik het allemaal wel goed!</li>
              <li>7. Wat is positief opvoeden en wanneer sta je als ouder in je kracht? We leren je alles over praten in groeitaal. We leren je het gedrag van je kind beter begrijpen.</li>
              <li>8. Mijn kind voelt geen grenzen hoe ga je daar mee om?</li>
              <li>9. Mijn kind maakt moeilijk contact. Hoe kan ik dat als ouder het beste begeleiden?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}