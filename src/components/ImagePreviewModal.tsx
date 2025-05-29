"use client";

import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Page Counter */}
        <div className="absolute top-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-2 rounded">
          {currentPage + 1} / {totalPages}
        </div>

        {/* Previous Button */}
        {currentPage > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
        )}

        {/* Next Button */}
        {currentPage < totalPages - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        )}

        {/* Preview Image - Increased size */}
        <div 
          className="relative max-w-6xl max-h-[90vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[currentPage].src}
            alt={images[currentPage].alt}
            width={1600}
            height={1200}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}