'use client';

import Image from 'next/image';
import { Mail, LinkedinIcon } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Melany",
      title: "Oprichter & Trainer",
      image: "/images/melany-profile.jpg",
      description: "Melany is gespecialiseerd in kindertrainingen en het begeleiden van hoogbegaafde kinderen. Met jarenlange ervaring in de praktijk helpt zij kinderen en gezinnen om hun potentieel te ontdekken.",
      expertise: ["Kindertrainingen", "Hoogbegaafdheid", "Gezinsbegeleiding", "Therapeutische interventies"]
    },
    {
      name: "Marian",
      title: "Trainer & Coach",
      image: "/images/marian-profile.jpg", 
      description: "Marian brengt expertise in coaching en training van professionals. Zij ontwikkelt en verzorgt cursussen voor ouders en professionals die werken met kinderen en jongeren.",
      expertise: ["Oudercursussen", "Professionele training", "Coaching", "Werkvormen ontwikkeling"]
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ons Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontmoet de mensen achter Empathys die zich dagelijks inzetten voor verbinding en vertrouwen.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={150}
                        height={150}
                        className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover"
                      />
                      <div className="absolute inset-0 ring-4 ring-primary-500 ring-opacity-20 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-4">
                      {member.title}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {member.description}
                    </p>

                    {/* Expertise Tags */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Icons */}
                    <div className="flex gap-3 justify-center md:justify-start">
                      <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                        <Mail className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                        <LinkedinIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;