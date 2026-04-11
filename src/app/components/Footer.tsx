import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-[#1e3a5f] text-xl font-bold mb-4">tobfinance</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Dein unabhängiger Versicherungsmakler für optimale Absicherung und kompetente Beratung.
            </p>
            <div className="flex gap-4">
              {/* Social Media Icons - Placeholder */}
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="LinkedIn">
                <span className="text-[#1e3a5f] text-xs">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="Xing">
                <span className="text-[#1e3a5f] text-xs">X</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#1e3a5f] font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigate('privatkunden')} className="hover:text-[#1e3a5f] transition-colors">Privatkunden</button>
              </li>
              <li>
                <button onClick={() => handleNavigate('gewerbekunden')} className="hover:text-[#1e3a5f] transition-colors">Gewerbekunden</button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-[#1e3a5f] transition-colors">Über Uns</button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="hover:text-[#1e3a5f] transition-colors">Kontakt</button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#1e3a5f] font-medium mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigate('privatkunden')} className="hover:text-[#1e3a5f] transition-colors">Versicherungen</button>
              </li>
              <li>
                <button onClick={() => handleNavigate('privatkunden')} className="hover:text-[#1e3a5f] transition-colors">Vermögensaufbau</button>
              </li>
              <li>
                <button onClick={() => handleNavigate('privatkunden')} className="hover:text-[#1e3a5f] transition-colors">Finanzplanung</button>
              </li>
              <li>
                <button onClick={() => handleNavigate('gewerbekunden')} className="hover:text-[#1e3a5f] transition-colors">Gewerbeversicherungen</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#1e3a5f] font-medium mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@tobfinance.de" className="hover:text-[#1e3a5f] transition-colors">
                  info@tobfinance.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+49123456789" className="hover:text-[#1e3a5f] transition-colors">
                  +49 (0) 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>Musterstraße 123<br />12345 Musterstadt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} tobfinance. Alle Rechte vorbehalten.</p>
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