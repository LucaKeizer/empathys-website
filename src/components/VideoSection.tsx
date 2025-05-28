'use client';

import Link from 'next/link';

const VideoSection = () => {
  return (
    <section className="bg-[rgba(220,226,230,255)] section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Video */}
          <div className="w-full">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/q6xHfLA_uTw"
                title="100 min en Ouder Hoogbegaafdheid"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              100 min en Ouder Hoogbegaafdheid
            </h2>
            
            <p className="text-gray-600 text-lg mb-10">
              Marian Plat, stichter van het bedrijf Slimvaardig, vertelt over meer hoogbegaafdheid in kinderen.
            </p>
            
            <Link href="/over-ons/marian-plat">
              <button className="mt-4 bg-[rgba(220,226,230,255)] text-black px-4 py-2 rounded-md font-medium border border-gray-400 hover:bg-gray-200 transition-colors duration-200">
                Lees meer over Marian
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;