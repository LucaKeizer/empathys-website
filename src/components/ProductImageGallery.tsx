"use client";

import Image from 'next/image';
import { BookOpen, Eye } from 'lucide-react';

interface ProductImageGalleryProps {
  images: Array<{ src: string; alt: string }>;
  selectedImage: number;
  onImageSelect: (index: number) => void;
  onPreviewClick: () => void;
}

export default function ProductImageGallery({
  images,
  selectedImage,
  onImageSelect,
  onPreviewClick
}: ProductImageGalleryProps) {
  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          width={600}
          height={600}
          className="w-full h-full object-contain p-4"
          priority
        />
        
        {/* Zoom indicator */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <Eye className="h-4 w-4 text-gray-600" />
        </div>
      </div>
      
      {/* Thumbnail Images and Preview Button */}
      <div className="flex items-center gap-4">
        {/* Thumbnail Images */}
        <div className="flex gap-3 flex-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageSelect(index)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                selectedImage === index
                  ? 'border-teal-500 ring-2 ring-teal-200 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={80}
                height={80}
                className="w-full h-full object-contain p-2 bg-white"
              />
              
              {/* Selected indicator */}
              {selectedImage === index && (
                <div className="absolute inset-0 bg-teal-500/10 flex items-center justify-center">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Preview Button */}
        <button 
          onClick={onPreviewClick}
          className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
        >
          <BookOpen className="h-4 w-4" />
          <span className="text-sm">Inkijken</span>
        </button>
      </div>

      {/* Image info */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">
              Afbeelding {selectedImage + 1} van {images.length}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Klik op een miniatuur om te wisselen
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Eye className="h-3 w-3" />
            <span>Klik voor voorvertoning</span>
          </div>
        </div>
      </div>
    </div>
  );
}