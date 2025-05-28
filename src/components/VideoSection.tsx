'use client';

import { Play, Eye, Calendar } from 'lucide-react';

const VideoSection = () => {
  // Extract video ID from YouTube URL
  const videoId = "q6xHfLA_uTw";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Zie Empathys in Actie
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontdek hoe onze aanpak werkt en wat Empathys voor jou en je kind kan betekenen. 
            Bekijk deze introductievideo om meer te leren over onze methoden en filosofie.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
              {/* YouTube Embed */}
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title="Empathys Introductie Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
              
              {/* Overlay with play button (shows before video loads) */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6">
                  <Play className="h-12 w-12 text-white fill-white" />
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kennismaking met Empathys
              </h3>
              <p className="text-gray-600 mb-4">
                Een persoonlijke introductie over onze visie op kindercoaching, 
                therapeutische begeleiding en de kracht van empathische verbinding.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>2.1K weergaven</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2 maanden geleden</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Klaar om te beginnen?
            </h3>
            <p className="text-gray-600 mb-6">
              Na het bekijken van deze video heb je een goed beeld van onze aanpak. 
              Neem contact op om te ontdekken hoe we jou kunnen helpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary">
                Plan een gesprek
              </button>
              <button className="btn btn-outline">
                Bekijk onze cursussen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;