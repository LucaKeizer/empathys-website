'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData: TimelineItem[] = [
    {
      year: '2014',
      title: 'Slimvaardig opgericht',
      description: 'Marian Plat richt haar bedrijf SlimVaardig op voor het begeleiden van hoogbegaafde kinderen, ouders en leerkrachten.',
      side: 'left',
      icon: <Award className="h-5 w-5" />,
      color: 'from-teal-500 to-blue-500'
    },
    {
      year: '2015',
      title: 'Kinderpraktijk Melany opgericht',
      description: 'Melany Molenaar-Stroek richt haar bedrijf Kinderpraktijk Melany op voor het therapeutisch begeleiden van kinderen en jongeren.',
      side: 'right',
      icon: <Users className="h-5 w-5" />,
      color: 'from-orange-500 to-pink-500'
    },
    {
      year: '2016',
      title: 'Eerste boek uitgebracht',
      description: 'Marian geeft haar eerste boek uit "Eerste hulp bij hoogbegaafdheid", een praktisch handboek voor het begeleiden van hoogbegaafde kinderen.',
      side: 'left',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      year: '2017',
      title: 'Marian start reflexintegratie',
      description: 'Marian richt zich naast het begeleiden van hoogbegaafde kinderen op motorisch remedial teaching en relfexintegratie om naast de cognitieve begeleiding ook kinderen en volwassenen lichaamsgericht te helpen.',
      side: 'right',
      icon: <Sparkles className="h-5 w-5" />,
      color: 'from-teal-500 to-green-500'
    },
    {
      year: '2019',
      title: 'Eerste ontmoeting',
      description: 'Melany en Marian komen in contact met elkaar vanwege hun wederzijdse passie in het begeleiden van kinderen. Het idee van een gezamenlijk prentenboek is geboren.',
      side: 'left',
      icon: <Users className="h-5 w-5" />,
      color: 'from-pink-500 to-orange-500'
    },
    {
      year: '2019',
      title: 'Melany en Marian Starten Samenwerking',
      description: 'Melany en Marian starten met het geven van sova- en breintrainingen. Een unieke training die het aanleren van sociale vaardigheden combineert met breinoefeningen.',
      side: 'right',
      icon: <Award className="h-5 w-5" />,
      color: 'from-blue-500 to-teal-500'
    },
    {
      year: '2020',
      title: 'Samen naar de Finish wordt gestart',
      description: 'Melany en Marian beginnen met het uitwerken van hun ideeën voor hun gezamenlijke prentenboek.',
      side: 'left',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2021',
      title: 'Illustrators zijn gevonden',
      description: 'Melany en Marian komen in contact met illustrators Jill Beers en Joey Duin die het prentenboek hebben voorzien van prachtige illustraties.',
      side: 'right',
      icon: <Sparkles className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2022',
      title: 'Boekuitgave',
      description: 'Het prentenboek "Samen naar de Finish" wordt uitgebracht.',
      side: 'left',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineItems = timelineRef.current.querySelectorAll('[data-timeline-item]');
      const newVisibleItems = new Set(visibleItems);

      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Item becomes visible when it's 120% into the viewport (appears before it's fully visible)
        if (rect.top < windowHeight * 1.2 && rect.bottom > 0) {
          newVisibleItems.add(index);
        }
      });

      if (newVisibleItems.size !== visibleItems.size) {
        setVisibleItems(newVisibleItems);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems]);

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-20 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-teal-100/50 to-blue-100/50 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-orange-100/50 to-pink-100/50 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200 px-4 py-2 rounded-full mb-6">
            <Calendar className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-800">Onze geschiedenis</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Het verhaal van{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Empathys
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van individuele praktijken tot een gezamenlijke missie: de reis naar ons therapeutische prentenboek.
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-300 via-blue-300 to-teal-300 rounded-full shadow-sm"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-16 lg:mb-20" data-timeline-item>
              <div className={`flex items-center ${item.side === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${item.side === 'left' ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div 
                    className={`bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 transform transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1 ${
                      visibleItems.has(index)
                        ? 'translate-x-0 opacity-100'
                        : item.side === 'left'
                          ? 'translate-x-32 opacity-0'
                          : '-translate-x-32 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    {/* Year badge */}
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg`}>
                      {item.icon}
                      <span>{item.year}</span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Year Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div 
                    className={`w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-sm shadow-xl transform transition-all duration-700 ease-out bg-gradient-to-r ${item.color} ${
                      visibleItems.has(index)
                        ? 'scale-100 opacity-100'
                        : 'scale-50 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 150 + 200}ms`
                    }}
                  >
                    {item.year}
                  </div>
                </div>

                {/* Spacer for opposite side */}
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