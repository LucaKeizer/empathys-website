'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, ArrowRight, Users } from 'lucide-react';

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#e8f4f8] via-[#f0f8fc] to-[#e0f2f7] py-16 lg:py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-300/30 to-blue-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Video */}
          <div className="w-full">
            <div className="relative">
              {/* Video Container with enhanced styling */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  {!isVideoLoaded ? (
                    // YouTube Thumbnail with Play Button (lightweight)
                    <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden group cursor-pointer" onClick={handlePlayVideo}>
                      <Image
                        src={`https://img.youtube.com/vi/q6xHfLA_uTw/maxresdefault.jpg`}
                        alt="100 min en Ouder Hoogbegaafdheid - Video Thumbnail"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                          <Play className="h-8 w-8 text-white ml-1 fill-current" />
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                        15:30
                      </div>
                      
                      {/* YouTube Logo */}
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        YouTube
                      </div>
                    </div>
                  ) : (
                    // Load actual iframe only when clicked
                    <iframe
                      src="https://www.youtube.com/embed/q6xHfLA_uTw?autoplay=1&rel=0&modestbranding=1"
                      title="100 min en Ouder Hoogbegaafdheid"
                      className="w-full h-full rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  )}
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

            {/* Video Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                <div className="text-2xl font-bold text-teal-600">15:30</div>
                <div className="text-sm text-gray-600">Duur</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                <div className="text-2xl font-bold text-orange-600">Expert</div>
                <div className="text-sm text-gray-600">Interview</div>
              </div>
            </div>

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