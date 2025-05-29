"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import ProductImageGallery from '@/components/ProductImageGallery';
import ImagePreviewModal from '@/components/ImagePreviewModal';
import BookBackgroundInfo from '@/components/BookBackgroundInfo';

export default function SamenNaarDeFinish() {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewPage, setPreviewPage] = useState(0);

  const bookImages = [
    {
      src: "/images/samen-naar-de-finish.jpg",
      alt: "Samen naar de finish - Cover"
    },
    {
      src: "/images/samen-naar-de-finish-2.jpg", 
      alt: "Samen naar de finish - Page 2"
    },
    {
      src: "/images/samen-naar-de-finish-3.jpg",
      alt: "Samen naar de finish - Page 3"
    }
  ];

  const previewImages = [
    {
      src: "/images/inlees-exemplaar-1.jpg",
      alt: "Preview page 1"
    },
    {
      src: "/images/inlees-exemplaar-2.jpg",
      alt: "Preview page 2"
    },
    {
      src: "/images/inlees-exemplaar-3.jpg",
      alt: "Preview page 3"
    }
  ];

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add the specified quantity to cart
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: 1,
        title: "Samen naar de finish",
        price: 21.95,
        image: "/images/samen-naar-de-finish.jpg",
        slug: "samen-naar-de-finish"
      });
    }
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
    setPreviewPage(0);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  const nextPreviewPage = () => {
    if (previewPage < previewImages.length - 1) {
      setPreviewPage(previewPage + 1);
    }
  };

  const prevPreviewPage = () => {
    if (previewPage > 0) {
      setPreviewPage(previewPage - 1);
    }
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/producten" className="hover:text-primary-600">Producten</Link>
          <span className="mx-2">›</span>
          <span>Samen naar de finish</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Product Images */}
          <ProductImageGallery
            images={bookImages}
            selectedImage={selectedImage}
            onImageSelect={setSelectedImage}
            onPreviewClick={openPreview}
          />

          {/* Right Column - Product Information */}
          <div className="space-y-6">
            {/* Product Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Samen naar de finish
            </h1>

            {/* Product Details */}
            <div className="flex items-center gap-4 text-gray-600">
              <span>9789090361345</span>
              <span>|</span>
              <span>Hardcover</span>
              <span>|</span>
              <span>37 blz.</span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-900">
              € 21,95
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aantal
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="bg-[rgba(240,141,15,255)] hover:bg-[rgba(240,141,15,0.9)] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                In Winkelwagen
              </button>
            </div>

            {/* Product Description */}
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Verbinding is de basis van goed contact en een goede ontwikkeling. Wij hebben een 
                boek geschreven om samen met je kind zijn of haar binnenwereld te ontdekken. In 
                het boek krijgen de dieren te maken met allerlei obstakels en ervaren verschillende 
                gevoelens.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description and Details Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Full Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Volledige beschrijving
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Een therapeutisch prentenboek om samen met kinderen hun emoties, kwaliteiten en valkuilen te ontdekken
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  In het boek zitten verschillende thema's verwerkt waar je samen met je kind over kunt praten. 
                  Hoe ervaart jouw kind de wereld om zich heen en hoe leert hij/zij met moeilijke situaties omgaan? 
                  De thema's die aan bod komen zijn: talenten/kwaliteiten, emoties, winnen en verliezen, mindset, 
                  oplossen van problemen en zelfvertrouwen. De thema's zijn verwerkt in een verhaal. Verbinding is 
                  de basis van goed contact en een goede ontwikkeling.
                </p>
              </div>
            </div>

            {/* Details Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                
                {/* Left Column */}
                <div className="space-y-0">
                  <div className="flex py-3 border-b border-gray-200">
                    <span className="w-32 font-medium text-gray-900">Auteur(s)</span>
                    <span className="text-gray-600">Melany Molenaar-Stroek & Marian Plat</span>
                  </div>
                  
                  <div className="flex py-3 border-b border-gray-200">
                    <span className="w-32 font-medium text-gray-900">Uitvoering</span>
                    <span className="text-gray-600">Hardcover</span>
                  </div>
                  
                  <div className="flex py-3 border-b border-gray-200">
                    <span className="w-32 font-medium text-gray-900">Productie</span>
                    <span className="text-gray-600">Drukzo</span>
                  </div>
                  
                  <div className="flex py-3">
                    <span className="w-32 font-medium text-gray-900">Taal</span>
                    <span className="text-gray-600">Nederlands</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-0">
                  <div className="flex py-3 border-b border-gray-200">
                    <span className="w-32 font-medium text-gray-900">ISBN</span>
                    <span className="text-gray-600">9789090361345</span>
                  </div>
                  
                  <div className="flex py-3 border-b border-gray-200">
                    <span className="w-32 font-medium text-gray-900">Afmetingen</span>
                    <span className="text-gray-600">260 x 260 x 10 mm</span>
                  </div>
                  
                  <div className="flex py-3 border-b border-gray-200">
                    <span className="w-32 font-medium text-gray-900">Aantal bladzijden</span>
                    <span className="text-gray-600">37</span>
                  </div>
                  
                  <div className="flex py-3">
                    <span className="w-32 font-medium text-gray-900">Thema</span>
                    <span className="text-gray-600">Prentenboek, Kinderen, Ontwikkeling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Information Section */}
      <BookBackgroundInfo />

      {/* Preview Modal */}
      <ImagePreviewModal
        isOpen={isPreviewOpen}
        currentPage={previewPage}
        totalPages={previewImages.length}
        images={previewImages}
        onClose={closePreview}
        onNext={nextPreviewPage}
        onPrev={prevPreviewPage}
      />
    </div>
  );
}