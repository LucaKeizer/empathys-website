"use client";

import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, BookOpen, Maximize2 } from 'lucide-react';

interface ImagePreviewModalProps {
  isOpen: boolean;
  currentPage: number;
  totalPages: number;
  images: Array<{ src: string; alt: string }>;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImagePreviewModal({
  isOpen,
  currentPage,
  totalPages,
  images,
  onClose,
  onNext,
  onPrev
}: ImagePreviewModalProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      onPrev();
    } else if (e.key === 'ArrowRight') {
      onNext();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-6 z-10">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Samen naar de Finish</h3>
                <p className="text-sm text-white/80">Inkijkexemplaar</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Page Counter */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium z-10">
          {currentPage + 1} / {totalPages}
        </div>

        {/* Navigation Controls */}
        {currentPage > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10 group"
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
        )}

        {currentPage < totalPages - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10 group"
          >
            <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
        )}

        {/* Preview Image */}
        <div 
          className="relative max-w-5xl max-h-[85vh] w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={images[currentPage].src}
              alt={images[currentPage].alt}
              fill
              className="object-contain p-4"
              priority
            />
            
            {/* Zoom indicator */}
            <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
              <Maximize2 className="h-3 w-3" />
              Voorvertoning
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 z-10">
          <div className="flex items-center justify-center gap-4">
            {/* Page Dots */}
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Navigate to specific page if needed
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Instructions */}
          <div className="text-center mt-4">
            <p className="text-white/80 text-sm">
              Gebruik de pijltjestoetsen of klik op de knoppen om te navigeren • ESC om te sluiten
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}