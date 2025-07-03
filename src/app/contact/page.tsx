"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoonnummer: '',
    bericht: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.naam || !formData.email || !formData.bericht) {
      setSubmitStatus({
        type: 'error',
        message: 'Vul alstublieft alle verplichte velden in (Naam, E-mail en Bericht)'
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Vul een geldig e-mailadres in'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Bedankt! Uw bericht is succesvol verzonden. Wij nemen zo spoedig mogelijk contact met u op.'
        });
        
        // Reset form
        setFormData({
          naam: '',
          email: '',
          telefoonnummer: '',
          bericht: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Er ging iets mis bij het verzenden van uw bericht. Probeer het opnieuw.'
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Er ging iets mis bij het verzenden van uw bericht. Probeer het opnieuw.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
                <h2 className="text-lg font-semibold text-white flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  E-mail
                </h2>
              </div>
              <div className="p-4 space-y-3">
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4">
                <h2 className="text-lg font-semibold text-white flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Telefoon
                </h2>
              </div>
              <div className="p-4 space-y-3">
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
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                {/* Naam Field */}
                <div>
                  <input
                    type="text"
                    name="naam"
                    value={formData.naam}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Naam *"
                    required
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
                    required
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
                    placeholder="Bericht *"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Versturen...
                      </>
                    ) : (
                      'Verstuur'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}