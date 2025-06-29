// File: /src/app/checkout/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Lock, CreditCard, User, MapPin, Mail, Phone } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CheckoutForm {
  // Customer Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Shipping Address
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  country: string;
  
  // Payment
  paymentMethod: 'ideal' | 'card';
  
  // Additional
  orderNotes: string;
  agreeToTerms: boolean;
  subscribeNewsletter: boolean;
}

// Function to check if address is in Volendam
function isVolendamAddress(city: string, postalCode: string): boolean {
  const normalizedCity = city.toLowerCase().trim();
  const normalizedPostalCode = postalCode.replace(/\s/g, '').toLowerCase();
  
  // Check if city is Volendam
  if (normalizedCity === 'volendam') {
    return true;
  }
  
  // Check postal codes for Volendam (1131-1135 range)
  const postalCodeMatch = normalizedPostalCode.match(/^(\d{4})/);
  if (postalCodeMatch) {
    const postalCodeNumber = parseInt(postalCodeMatch[1]);
    if (postalCodeNumber >= 1131 && postalCodeNumber <= 1135) {
      return true;
    }
  }
  
  return false;
}

export default function Checkout() {
  const { state, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingCost, setShippingCost] = useState(4.50);
  const [isVolendamDelivery, setIsVolendamDelivery] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    country: 'Nederland',
    paymentMethod: 'ideal',
    orderNotes: '',
    agreeToTerms: false,
    subscribeNewsletter: false,
  });

  const total = state.total;

  // Update shipping cost when address changes
  useEffect(() => {
    const isVolendam = isVolendamAddress(formData.city, formData.postalCode);
    setIsVolendamDelivery(isVolendam);
    setShippingCost(isVolendam ? 0 : 4.50);
  }, [formData.city, formData.postalCode]);

  // Redirect if cart is empty
  if (state.items.length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Uw winkelwagen is leeg
            </h1>
            <p className="text-gray-600 mb-8">
              Voeg eerst producten toe aan uw winkelwagen voordat u kunt afrekenen.
            </p>
            <Link
              href="/producten"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Naar producten
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = (): boolean => {
    const required = ['firstName', 'lastName', 'email', 'street', 'houseNumber', 'postalCode', 'city'];
    const missing = required.filter(field => !formData[field as keyof CheckoutForm]);
    
    if (missing.length > 0) {
      alert(`Vul alstublieft de volgende verplichte velden in: ${missing.join(', ')}`);
      return false;
    }
    
    if (!formData.agreeToTerms) {
      alert('U moet akkoord gaan met de algemene voorwaarden om door te gaan.');
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Vul een geldig e-mailadres in.');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      // Create order object
      const orderData = {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          street: formData.street,
          houseNumber: formData.houseNumber,
          postalCode: formData.postalCode,
          city: formData.city,
          country: formData.country,
        },
        items: state.items,
        pricing: {
          subtotal: total,
          shipping: shippingCost,
          total: total,
        },
        paymentMethod: formData.paymentMethod,
        orderNotes: formData.orderNotes,
        subscribeNewsletter: formData.subscribeNewsletter,
      };

      // Send to payment processing
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success && result.paymentUrl) {
        // Clear cart and redirect to payment
        clearCart();
        window.location.href = result.paymentUrl;
      } else {
        throw new Error(result.error || 'Er ging iets mis bij het verwerken van uw bestelling.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Er ging iets mis bij het verwerken van uw bestelling. Probeer het opnieuw.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Afrekenen</h1>
            <div className="flex items-center text-sm text-gray-600">
              <Lock className="h-4 w-4 mr-2" />
              Beveiligde verbinding
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Form Fields */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Customer Information */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <User className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-lg font-semibold text-gray-900">Contactgegevens</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Voornaam *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Achternaam *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-lg font-semibold text-gray-900">Verzendadres</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Straatnaam *
                      </label>
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Huisnummer *
                      </label>
                      <input
                        type="text"
                        name="houseNumber"
                        value={formData.houseNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="1234 AB"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Plaats *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Land *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="Nederland">Nederland</option>
                        <option value="België">België</option>
                        <option value="Duitsland">Duitsland</option>
                      </select>
                    </div>
                  </div>

                  {/* Volendam Delivery Notice */}
                  {isVolendamDelivery && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-green-800">
                            <strong>Gratis bezorging!</strong> Uw adres is in Volendam, daarom zijn er geen verzendkosten.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-6">
                    <CreditCard className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-lg font-semibold text-gray-900">Betaalmethode</h2>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-500 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="ideal"
                        checked={formData.paymentMethod === 'ideal'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span className="font-medium">iDEAL</span>
                      <span className="text-sm text-gray-600 ml-auto">Betaal direct via uw bank</span>
                    </label>
                    
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-500 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span className="font-medium">Creditcard</span>
                      <span className="text-sm text-gray-600 ml-auto">Visa, Mastercard</span>
                    </label>
                  </div>
                </div>

                {/* Order Notes */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Opmerkingen bij bestelling</h2>
                  <textarea
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Eventuele opmerkingen of speciale verzoeken..."
                  />
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm sticky top-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Bestelling</h2>
                  
                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-contain rounded"
                        />
                        <div className="flex-grow">
                          <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                          <p className="text-sm text-gray-600">Aantal: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">€ {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pricing Summary */}
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotaal</span>
                      <span className="font-medium">€ {total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Verzendkosten</span>
                      <span className={`font-medium ${isVolendamDelivery ? 'text-green-600' : ''}`}>
                        {isVolendamDelivery ? 'Gratis' : `€ ${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                      <span>Totaal</span>
                      <span>€ {(total + shippingCost).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Terms and Newsletter */}
                  <div className="mt-6 space-y-3">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 mr-2"
                        required
                      />
                      <span className="text-sm text-gray-600">
                        Ik ga akkoord met de{' '}
                        <Link href="/algemene-voorwaarden" className="text-primary-600 underline">
                          algemene voorwaarden
                        </Link>
                        *
                      </span>
                    </label>
                    
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="subscribeNewsletter"
                        checked={formData.subscribeNewsletter}
                        onChange={handleInputChange}
                        className="mt-1 mr-2"
                      />
                      <span className="text-sm text-gray-600">
                        Ik wil op de hoogte blijven van nieuwe producten en aanbiedingen
                      </span>
                    </label>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full mt-6 bg-[rgba(240,141,15,255)] hover:bg-[rgba(240,141,15,0.9)] disabled:bg-gray-400 text-white px-6 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        Verwerken...
                      </>
                    ) : (
                      <>
                        <Lock className="h-5 w-5" />
                        Bestelling plaatsen
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}