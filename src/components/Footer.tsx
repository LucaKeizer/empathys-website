'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

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
    <footer className="bg-[rgba(1,23,23,255)] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Company Info & Social Media */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/empathys-logo-white.png"
                alt="Empathys"
                width={280}
                height={85}
                className="h-20 w-auto mb-4"
              />
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/people/Kinderpraktijk-Melany/100066553550065/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded hover:bg-primary-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/kinderpraktijk_melany/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded hover:bg-primary-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://nl.linkedin.com/in/melany-stroek-11398681"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded hover:bg-primary-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Informatie</h3>
            <ul className="space-y-1">
              {informationLinks.map((link) => {
                const isActive = pathname === link.href;
                
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className={`transition-colors duration-200 ${
                        isActive 
                          ? 'font-semibold' 
                          : 'text-gray-200'
                      }`}
                      style={isActive ? { color: 'rgba(3,150,153,255)' } : {}}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Openingstijden</h3>
            <div className="space-y-1">
              {businessHours.map((schedule, index) => {
                const isToday = currentDay === schedule.dayIndex;
                const isOpen = isCurrentlyOpen(schedule.dayIndex, schedule.hours);
                
                return (
                  <div key={index} className="flex text-gray-200">
                    <span 
                      className={`w-24 ${isToday ? 'font-semibold' : ''}`}
                      style={isToday ? { color: 'rgba(3,150,153,255)' } : {}}
                    >
                      {schedule.day}
                    </span>
                    <span 
                      className={`${isToday || isOpen ? 'font-semibold' : ''}`}
                      style={isToday || isOpen ? { color: 'rgba(3,150,153,255)' } : {}}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-1 text-gray-200">
              <p className="font-semibold text-white">Empathys</p>
              <p>Parallelweg 56</p>
              <p>1131 DM Volendam</p>
              <p>info@empathys.nl</p>
              <p>KvK: 62672681</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="text-gray-200">
            © Copyright 2025 - Empathys
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;