import Link from 'next/link';

export default function ContactSection() {
    return (
        <div className="bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Praktische informatie
                        </h2>
                        
                        <div className="space-y-4 text-gray-600">
                            <p>De cursus wordt gegeven in twee avonden/middagen.</p>
                            <p>Adres: Parallelweg 56 in Volendam.</p>
                            <p>Duur: 2 tot 2,5 uur per avond.</p>
                        </div>
                    </div>

                    <div className="flex-shrink-0 ml-8 flex flex-col justify-end">
                        <div className="mt-8">
                            <Link 
                                href="/contact"
                                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                            >
                                Neem contact op
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}