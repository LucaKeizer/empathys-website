'use client';

import { Calendar, BookOpen, Users, Award, Sparkles } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  icon: React.ReactNode;
  color: string;
}

const Timeline = () => {
  const timelineData: TimelineItem[] = [
    {
      year: '2014',
      title: 'Slimvaardig opgericht',
      description: 'Marian Plat richt haar bedrijf SlimVaardig op voor het begeleiden van hoogbegaafde kinderen, ouders en leerkrachten.',
      side: 'left',
      icon: <Award className="h-4 w-4" />,
      color: 'bg-teal-500'
    },
    {
      year: '2015',
      title: 'Kinderpraktijk Melany opgericht',
      description: 'Melany Molenaar-Stroek richt haar bedrijf Kinderpraktijk Melany op voor het therapeutisch begeleiden van kinderen en jongeren.',
      side: 'right',
      icon: <Users className="h-4 w-4" />,
      color: 'bg-orange-500'
    },
    {
      year: '2016',
      title: 'Eerste boek uitgebracht',
      description: 'Marian geeft haar eerste boek uit "Eerste hulp bij hoogbegaafdheid", een praktisch handboek voor het begeleiden van hoogbegaafde kinderen.',
      side: 'left',
      icon: <BookOpen className="h-4 w-4" />,
      color: 'bg-purple-500'
    },
    {
      year: '2017',
      title: 'Marian start reflexintegratie',
      description: 'Marian richt zich naast het begeleiden van hoogbegaafde kinderen op motorisch remedial teaching en relfexintegratie om naast de cognitieve begeleiding ook kinderen en volwassenen lichaamsgericht te helpen.',
      side: 'right',
      icon: <Sparkles className="h-4 w-4" />,
      color: 'bg-green-500'
    },
    {
      year: '2019',
      title: 'Eerste ontmoeting',
      description: 'Melany en Marian komen in contact met elkaar vanwege hun wederzijdse passie in het begeleiden van kinderen. Het idee van een gezamenlijk prentenboek is geboren.',
      side: 'left',
      icon: <Users className="h-4 w-4" />,
      color: 'bg-pink-500'
    },
    {
      year: '2019',
      title: 'Melany en Marian Starten Samenwerking',
      description: 'Melany en Marian starten met het geven van sova- en breintrainingen. Een unieke training die het aanleren van sociale vaardigheden combineert met breinoefeningen.',
      side: 'right',
      icon: <Award className="h-4 w-4" />,
      color: 'bg-blue-500'
    },
    {
      year: '2020',
      title: 'Samen naar de Finish wordt gestart',
      description: 'Melany en Marian beginnen met het uitwerken van hun ideeën voor hun gezamenlijke prentenboek.',
      side: 'left',
      icon: <BookOpen className="h-4 w-4" />,
      color: 'bg-red-500'
    },
    {
      year: '2021',
      title: 'Illustrators zijn gevonden',
      description: 'Melany en Marian komen in contact met illustrators Jill Beers en Joey Duin die het prentenboek hebben voorzien van prachtige illustraties.',
      side: 'right',
      icon: <Sparkles className="h-4 w-4" />,
      color: 'bg-indigo-500'
    },
    {
      year: '2022',
      title: 'Boekuitgave',
      description: 'Het prentenboek "Samen naar de Finish" wordt uitgebracht.',
      side: 'left',
      icon: <BookOpen className="h-4 w-4" />,
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <Calendar className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-semibold text-gray-700">Onze geschiedenis</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Het verhaal van{' '}
            <span className="text-teal-600">Empathys</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Van individuele praktijken tot een gezamenlijke missie: de reis naar ons therapeutische prentenboek.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Simple Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 hidden lg:block"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-10 lg:mb-12">
              <div className={`flex items-center ${item.side === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${item.side === 'left' ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                    
                    {/* Year badge */}
                    <div className={`inline-flex items-center gap-2 ${item.color} text-white px-3 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm`}>
                      {item.icon}
                      <span>{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Year Circle - Desktop Only */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full border-4 border-white ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                    {item.year.slice(-2)}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;