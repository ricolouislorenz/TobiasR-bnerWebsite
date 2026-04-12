import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/4133d71e65fdb3454145a94a82cfc3b370306199.png';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Leistungen', sectionId: 'leistungen' },
    { label: 'Über Uns',   sectionId: 'team'       },
    { label: 'Bewertungen',sectionId: 'bewertungen' },
    { label: 'Kontakt',    sectionId: 'kontakt'     },
  ];

  const handleNav = (sectionId: string) => {
    onScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNav('hero')} className="hover:opacity-80 transition-opacity">
            <img
              src={logoImage}
              alt="tobfinance – Tobias Rübner"
              className="h-10 md:h-12 w-auto"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleNav(item.sectionId)}
                className="text-gray-700 hover:text-[#8B7355] font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA – Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav('kontakt')}
              className="inline-flex items-center px-6 py-3 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-colors font-medium"
            >
              Beratung vereinbaren
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => handleNav(item.sectionId)}
                  className="w-full text-left py-2 text-gray-700 hover:text-[#8B7355] font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('kontakt')}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-colors font-medium mt-4"
              >
                Beratung vereinbaren
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
