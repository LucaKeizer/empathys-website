import Link from 'next/link';

export default function Cursussen() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span>Cursussen</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        <div>
          
          {/* Title and Description */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Cursussen
          </h1>
          
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            Empathys organiseert regelmatig trainingen voor kinderen (sova-breintraining), professionals en ouders. Onze oudercursus 'Leer het gedrag van je kind beter te begrijpen en lezen' organiseren wij meerdere keren per jaar. Wij zullen nog meer cursussen ontwikkelen. Bekijk hieronder ons aanbod.
          </p>

          {/* Course Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-3/5 mb-8">
            
            {/* Oudercursus Button */}
            <Link href="/cursussen/oudercursus">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-primary-600 transition-all duration-200 cursor-pointer group">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Oudercursus
                </h3>
              </div>
            </Link>

            {/* Sova - breintraining Button */}
            <Link href="/cursussen/sova-breintraining">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-primary-600 transition-all duration-200 cursor-pointer group">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Sova - breintraining
                </h3>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}