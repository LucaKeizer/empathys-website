"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoonnummer: '',
    bericht: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.naam || !formData.email) {
      alert('Vul alstublieft alle verplichte velden in (Naam en E-mail)');
      return;
    }
    
    // Create mailto link
    const subject = encodeURIComponent('Contact via website');
    const body = encodeURIComponent(
      `Naam: ${formData.naam}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefoonnummer: ${formData.telefoonnummer}\n\n` +
      `Bericht:\n${formData.bericht}`
    );
    
    const mailtoLink = `mailto:info@empathys.nl?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-primary-600">Home</a>
          <span className="mx-2">›</span>
          <span>Contact</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Contact
        </h1>
        
        <p className="text-gray-600 mb-12">
          Wil je in contact komen? We zouden graag van je horen. Zo kunt u ons bereiken
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
          
          {/* Left Column - Contact Info (30% width) */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* E-mail Section */}
            <div>
              <div className="bg-blue-100 p-4 rounded-t-lg">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              E-mail
            </h2>
              </div>
              <div className="bg-gray-200 p-4 rounded-b-lg space-y-3">
            <div>
              <div className="font-semibold text-gray-900">Empathys</div>
              <div className="text-gray-600">info@empathys.nl</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Melany</div>
              <div className="text-gray-600">info@kinderpraktijkmelany.nl</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Marian</div>
              <div className="text-gray-600">marianplat1973@gmail.com</div>
            </div>
              </div>
            </div>

            {/* Telefoon Section */}
            <div>
              <div className="bg-blue-100 p-4 rounded-t-lg">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Telefoon
            </h2>
              </div>
              <div className="bg-gray-200 p-4 rounded-b-lg space-y-3">
            <div>
              <div className="font-semibold text-gray-900">Melany</div>
              <div className="text-gray-600">+31 6 5127 8117</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Marian</div>
              <div className="text-gray-600">+31 6 5203 7753</div>
            </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form (70% width) */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              
              {/* Naam Field */}
              <div>
            <input
              type="text"
              name="naam"
              value={formData.naam}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="Naam *"
            />
              </div>

              {/* E-mail Field */}
              <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="E-mail *"
            />
              </div>

              {/* Telefoonnummer Field */}
              <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <input
              type="tel"
              name="telefoonnummer"
              value={formData.telefoonnummer}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
              placeholder="Telefoonnummer"
            />
              </div>

              {/* Bericht Field */}
              <div>
            <textarea
              name="bericht"
              rows={6}
              value={formData.bericht}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-vertical"
              placeholder="Bericht"
            />
              </div>

              {/* Submit Button - Changed from justify-end to justify-start */}
              <div className="flex justify-start">
            <button
              onClick={handleSubmit}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Verstuur
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}