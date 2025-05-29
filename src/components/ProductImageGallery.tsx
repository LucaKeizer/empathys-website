"use client";

import Image from 'next/image';
import { BookOpen } from 'lucide-react';

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
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          width={600}
          height={600}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      
      {/* Thumbnail Images and Inkijken Button */}
      <div className="flex items-center gap-4">
        {/* Thumbnail Images */}
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageSelect(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === index
                  ? 'border-primary-600 ring-2 ring-primary-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        {/* Inkijken Button */}
        <button 
          onClick={onPreviewClick}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors cursor-pointer border border-primary-600 hover:border-primary-700 px-4 py-2 rounded-lg hover:bg-primary-50"
        >
          <BookOpen className="h-4 w-4" />
          <span className="text-sm font-medium">Inkijken</span>
        </button>
      </div>
    </div>
  );
}