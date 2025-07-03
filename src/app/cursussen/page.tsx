import Link from 'next/link';

export default function Cursussen() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
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
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-primary-600 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Oudercursus
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Voor ouders en verzorgers
                </p>
              </div>
            </Link>

            {/* Sova - breintraining Button */}
            <Link href="/cursussen/sova-breintraining">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-primary-600 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Sova - breintraining
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Voor kinderen en jongeren
                </p>
              </div>
            </Link>

          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Onze trainingsaanpak
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Oudercursus</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Praktische cursus vol handvatten, tools en inzichten voor meer bewuste opvoeding. 
                  Leer het gedrag van je kind beter begrijpen en effectief reageren op uitdagende situaties.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sova-breintraining</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unieke combinatie van sociale vaardigheidstraining en breintraining. 
                  Kinderen ontwikkelen sociale vaardigheden terwijl ze cognitief en lichamelijk worden uitgedaagd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}