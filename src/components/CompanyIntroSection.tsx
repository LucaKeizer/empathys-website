'use client';

import { Heart, Users, BookOpen, Target } from 'lucide-react';

const CompanyIntroSection = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      title: "Verbinding",
      description: "Wij helpen kinderen, ouders en professionals om echte verbindingen te maken."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: "Vertrouwen",
      description: "Door begrip en empathie bouwen we samen aan een vertrouwensvolle basis."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-500" />,
      title: "Ontwikkeling",
      description: "Met onze trainingen en materialen ondersteunen we de persoonlijke ontwikkeling."
    },
    {
      icon: <Target className="h-8 w-8 text-primary-500" />,
      title: "Doelgericht",
      description: "Praktische tools en methoden die direct toepasbaar zijn in het dagelijks leven."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Empathys staat voor Verbinding en Vertrouwen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bij Empathys geloven we in de kracht van empathie en verbinding. Wij bieden trainingen, 
            cursussen en therapeutische materialen voor kinderen, ouders en professionals die werken 
            met kinderen en gezinnen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ontdek wat Empathys voor jou kan betekenen
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Of je nu een ouder bent die zijn kind beter wil begrijpen, een professional die 
            effectieve tools zoekt, of een organisatie die wil investeren in menselijke verbinding - 
            wij helpen je graag verder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">
              Bekijk onze cursussen
            </button>
            <button className="btn btn-outline">
              Neem contact op
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;