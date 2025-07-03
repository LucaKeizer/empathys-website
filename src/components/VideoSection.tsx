'use client';

import Link from 'next/link';
import { Play, ArrowRight, Users } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e8f4f8] via-[#f0f8fc] to-[#e0f2f7] py-20 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-300/30 to-blue-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Video */}
          <div className="w-full">
            <div className="relative">
              {/* Video Container with enhanced styling */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/q6xHfLA_uTw"
                    title="100 min en Ouder Hoogbegaafdheid"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 fill-current" />
                  <span className="text-sm font-bold">Interview</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-200 shadow-sm">
              <Users className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-800">Video interview</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              100 min en Ouder{' '}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Hoogbegaafdheid
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Marian Plat, stichter van het bedrijf Slimvaardig, vertelt over meer hoogbegaafdheid in kinderen.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link href="/over-ons/marian-plat" className="group">
                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transform hover:-translate-y-0.5">
                  <span>Lees meer over Marian</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;