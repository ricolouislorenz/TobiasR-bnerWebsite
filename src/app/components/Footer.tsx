import { Mail, Phone, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/4133d71e65fdb3454145a94a82cfc3b370306199.png';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info */}
          <div>
            <button onClick={() => onScrollTo('hero')} className="mb-4 hover:opacity-80 transition-opacity block">
              <img src={logoImage} alt="tobfinance – Tobias Rübner" className="h-10 w-auto" />
            </button>
            <p className="text-sm leading-relaxed text-gray-500">
              Dein unabhängiger Versicherungsmakler für optimale Absicherung und kompetente Beratung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#1e3a5f] font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Leistungen',   id: 'leistungen'  },
                { label: 'Über Uns',     id: 'team'        },
                { label: 'Bewertungen',  id: 'bewertungen' },
                { label: 'Kontakt',      id: 'kontakt'     },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button onClick={() => onScrollTo(id)} className="hover:text-[#1e3a5f] transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#1e3a5f] font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Investment',
                'Altersvorsorge',
                'Krankenversicherung',
                'Private Vorsorge',
                'Betriebshaftpflicht',
                'Cyber-Absicherung',
              ].map((s) => (
                <li key={s}>
                  <button onClick={() => onScrollTo('leistungen')} className="hover:text-[#1e3a5f] transition-colors">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#1e3a5f] font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <a href="mailto:info@tobfinance.de" className="hover:text-[#1e3a5f] transition-colors">
                  info@tobfinance.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <a href="tel:+4940123456789" className="hover:text-[#1e3a5f] transition-colors">
                  +49 40 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <span>Hamburg, Deutschland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} tobfinance – Tobias Rübner Versicherungsmakler. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#1e3a5f] transition-colors">Impressum</a>
              <a href="#" className="hover:text-[#1e3a5f] transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-[#1e3a5f] transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
