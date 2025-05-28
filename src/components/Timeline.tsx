'use client';

import { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData: TimelineItem[] = [
    {
      year: '2014',
      title: 'Slimvaardig opgericht',
      description: 'Marian Plat richt haar bedrijf SlimVaardig op voor het begeleiden van hoogbegaafde kinderen, ouders en leerkrachten.',
      side: 'left'
    },
    {
      year: '2015',
      title: 'Kinderpraktijk Melany opgericht',
      description: 'Melany Molenaar-Stroek richt haar bedrijf Kinderpraktijk Melany op voor het therapeutisch begeleiden van kinderen en jongeren.',
      side: 'right'
    },
    {
      year: '2016',
      title: 'Eerste boek uitgebracht',
      description: 'Marian geeft haar eerste boek uit "Eerste hulp bij hoogbegaafdheid", een praktisch handboek voor het begeleiden van hoogbegaafde kinderen.',
      side: 'left'
    },
    {
      year: '2017',
      title: 'Marian start reflexintegratie',
      description: 'Marian richt zich naast het begeleiden van hoogbegaafde kinderen op motorisch remedial teaching en relfexintegratie om naast de cognitieve begeleiding ook kinderen en volwassenen lichaamsgericht te helpen.',
      side: 'right'
    },
    {
      year: '2019',
      title: 'Eerste ontmoeting',
      description: 'Melany en Marian komen in contact met elkaar vanwege hun wederzijdse passie in het begeleiden van kinderen. Het idee van een gezamenlijk prentenboek is geboren.',
      side: 'left'
    },
    {
      year: '2019',
      title: 'Melany en Marian Starten Samenwerking',
      description: 'Melany en Marian starten met het geven van sova- en breintrainingen. Een unieke training die het aanleren van sociale vaardigheden combineert met breinoefeningen.',
      side: 'right'
    },
    {
      year: '2020',
      title: 'Samen naar de Finish wordt gestart',
      description: 'Melany en Marian beginnen met het uitwerken van hun ideeën voor hun gezamenlijke prentenboek.',
      side: 'left'
    },
    {
      year: '2021',
      title: 'Illustrators zijn gevonden',
      description: 'Melany en Marian komen in contact met illustrators Jill Beers en Joey Duin die het prentenboek hebben voorzien van prachtige illustraties.',
      side: 'right'
    },
    {
      year: '2022',
      title: 'Boekuitgave',
      description: 'Het prentenboek "Samen naar de Finish" wordt uitgebracht.',
      side: 'left'
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
        
        // Item becomes visible when it's 90% into the viewport (appears much earlier)
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          newVisibleItems.add(index);
        }
      });

      if (newVisibleItems.size !== visibleItems.size) {
        setVisibleItems(newVisibleItems);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial visibility
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems]);

  return (
    <section className="bg-[rgba(237,240,242,255)] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="relative" ref={timelineRef}>
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-12 lg:mb-16" data-timeline-item>
              <div className={`flex items-center ${item.side === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${item.side === 'left' ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div 
                    className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-700 ease-out ${
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Year Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div 
                    className={`w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-sm shadow-lg transform transition-all duration-700 ease-out ${
                      visibleItems.has(index)
                        ? 'scale-100 opacity-100 bg-primary-600'
                        : 'scale-50 opacity-0 bg-gray-400'
                    }`}
                    style={{
                      transitionDelay: `${index * 150 + 200}ms`,
                      animation: visibleItems.has(index) ? 'bounce-in 0.8s ease-out' : ''
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

      <style jsx global>{`
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;