import Link from 'next/link';
import { MapPin, Clock, Calendar, Phone } from 'lucide-react';

export default function ContactSection() {
    return (
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        
                        {/* Practical Information */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                                        <Calendar className="h-5 w-5 text-white" />
                                    </div>
                                    Praktische informatie
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border border-teal-100">
                                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Calendar className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Duur</h3>
                                        <p className="text-gray-600 text-sm">De cursus wordt gegeven in twee avonden/middagen</p>
                                    </div>
                                    
                                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border border-orange-100">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Locatie</h3>
                                        <p className="text-gray-600 text-sm">Parallelweg 56 in Volendam</p>
                                    </div>
                                    
                                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Clock className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Tijd</h3>
                                        <p className="text-gray-600 text-sm">2 tot 2,5 uur per avond</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="lg:col-span-1">
                            <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl p-8 text-white shadow-xl h-full flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold">Interesse?</h3>
                                </div>
                                
                                <p className="text-teal-100 mb-6 leading-relaxed">
                                    Neem contact op voor meer informatie over de cursus of om u aan te melden.
                                </p>
                                
                                <Link 
                                    href="/contact"
                                    className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
                                >
                                    Neem contact op
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}