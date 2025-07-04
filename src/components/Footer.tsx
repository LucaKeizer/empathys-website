'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const today = new Date();
  const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = today.getHours();

  const informationLinks = [
    { href: '/over-ons', label: 'Over ons' },
    { href: '/producten/samen-naar-de-finish', label: 'Samen naar de finish' },
    { href: '/cursussen', label: 'Cursussen' },
    { href: '/contact', label: 'Contact' },
    { href: '/algemene-voorwaarden', label: 'Algemene voorwaarden' },
    { href: '/levering-en-retour', label: 'Levering en retour' },
  ];

  const businessHours = [
    { day: 'Maandag:', hours: '09:00 - 17:00', dayIndex: 1 },
    { day: 'Dinsdag:', hours: '09:00 - 17:00', dayIndex: 2 },
    { day: 'Woensdag:', hours: '09:00 - 17:00', dayIndex: 3 },
    { day: 'Donderdag:', hours: '09:00 - 17:00', dayIndex: 4 },
    { day: 'Vrijdag:', hours: '09:00 - 17:00', dayIndex: 5 },
    { day: 'Zaterdag:', hours: 'Gesloten', dayIndex: 6 },
    { day: 'Zondag:', hours: 'Gesloten', dayIndex: 0 },
  ];

  // Check if currently open
  const isCurrentlyOpen = (dayIndex: number, hours: string) => {
    if (currentDay !== dayIndex) return false;
    if (hours === 'Gesloten') return false;
    const [start, end] = hours.split(' - ');
    const [startHour] = start.split(':').map(Number);
    const [endHour] = end.split(':').map(Number);
    return currentHour >= startHour && currentHour < endHour;
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#011717] via-[#0a1f1f] to-[#011717] text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-blue-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Info & Social Media */}
          <div className="space-y-8">
            <div className="mb-6">
              <Image
                src="/images/empathys-logo-white.png"
                alt="Empathys"
                width={280}
                height={85}
                className="h-20 w-auto mb-6"
              />
              <p className="text-gray-300 leading-relaxed">
                Verbinding en vertrouwen voor kinderen, ouders en professionals. 
                Samen naar een betere toekomst.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Volg ons</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/people/Kinderpraktijk-Melany/100066553550065/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.instagram.com/kinderpraktijk_melany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://nl.linkedin.com/in/melany-stroek-11398681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              Informatie
            </h3>
            <ul className="space-y-3">
              {informationLinks.map((link) => {
                const isActive = pathname === link.href;
                
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className={`group flex items-center transition-all duration-300 hover:translate-x-2 ${
                        isActive 
                          ? 'font-semibold text-teal-400' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className={`w-1 h-1 rounded-full mr-3 transition-all duration-300 ${
                        isActive ? 'bg-teal-400' : 'bg-gray-600 group-hover:bg-teal-400'
                      }`}></div>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-teal-400" />
              Openingstijden
            </h3>
            <div className="space-y-2">
              {businessHours.map((schedule, index) => {
                const isToday = currentDay === schedule.dayIndex;
                const isOpen = isCurrentlyOpen(schedule.dayIndex, schedule.hours);
                
                return (
                  <div key={index} className={`flex justify-between py-1 px-3 rounded-lg transition-all duration-300 ${
                    isToday ? 'bg-white/10 backdrop-blur-sm' : 'hover:bg-white/5'
                  }`}>
                    <span 
                      className={`font-medium ${
                        isToday ? 'text-teal-400' : 'text-gray-300'
                      }`}
                    >
                      {schedule.day}
                    </span>
                    <span 
                      className={`${
                        isToday || isOpen ? 'text-teal-400 font-semibold' : 'text-gray-400'
                      }`}
                    >
                      {schedule.hours}
                      {isOpen && (
                        <span className="ml-2 inline-flex items-center gap-1 text-green-400 text-xs">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          Open
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <Mail className="h-5 w-5 text-teal-400" />
              Contact
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
                <p className="font-semibold text-white mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-400" />
                  Empathys
                </p>
                <div className="text-gray-300 space-y-1 text-sm">
                  <p>Parallelweg 56</p>
                  <p>1131 DM Volendam</p>
                  <p className="flex items-center gap-2 mt-2">
                    <Mail className="h-4 w-4 text-teal-400" />
                    <a href="mailto:info@empathys.nl" className="hover:text-teal-400 transition-colors">
                      info@empathys.nl
                    </a>
                  </p>
                  <p className="text-xs text-gray-400 mt-2">KvK: 62672681</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-300 text-sm">
              © Copyright {currentYear} - Empathys. Alle rechten voorbehouden.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/algemene-voorwaarden" className="hover:text-teal-400 transition-colors">
                Voorwaarden
              </Link>
              <Link href="/levering-en-retour" className="hover:text-teal-400 transition-colors">
                Levering & Retour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;