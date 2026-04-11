import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImage from 'figma:asset/4133d71e65fdb3454145a94a82cfc3b370306199.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      label: 'Startseite', 
      page: 'home'
    },
    { 
      label: 'Privatkunden', 
      page: 'privatkunden',
      submenu: [
        { label: 'Investment', page: 'privatkunden' },
        { label: 'Private Altersvorsorge', page: 'privatkunden' },
        { label: 'Krankenversicherung', page: 'privatkunden' },
        { label: 'Private Vorsorge', page: 'privatkunden' },
        { label: 'Sachversicherung', page: 'privatkunden' },
        { label: 'Weitere Versicherungen', page: 'privatkunden' }
      ]
    },
    { 
      label: 'Gewerbekunden', 
      page: 'gewerbekunden',
      submenu: [
        { label: 'Betriebshaftpflicht', page: 'gewerbekunden' },
        { label: 'Firmenrechtschutz', page: 'gewerbekunden' },
        { label: 'Vermögensschadenhaftpflicht', page: 'gewerbekunden' },
        { label: 'D&O', page: 'gewerbekunden' },
        { label: 'Geschäftsinhalt', page: 'gewerbekunden' },
        { label: 'Cyber-Absicherung', page: 'gewerbekunden' },
        { label: 'Transport', page: 'gewerbekunden' },
        { label: 'Versicherungen für Angestellte', page: 'gewerbekunden' }
      ]
    },
    { 
      label: 'Über Uns', 
      page: 'about'
    },
    { 
      label: 'Kontakt', 
      page: 'contact'
    }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <div className="flex items-center">
            <button
              onClick={() => handleNavigate('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={logoImage} 
                alt="tobfinance - Tobias Rübner" 
                className="h-10 md:h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.page}
                className="relative group"
              >
                <button
                  onClick={() => handleNavigate(item.page)}
                  className={`font-medium transition-colors flex items-center gap-1 ${
                    currentPage === item.page
                      ? 'text-[#4A3728]'
                      : 'text-gray-700 hover:text-[#8B7355]'
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="size-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-64 bg-white rounded-lg shadow-xl border border-[#8B7355]/20 py-2">
                      {item.submenu.map((subItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(subItem.page)}
                          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-[#8B7355]/10 hover:text-[#4A3728] transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigate('contact')}
              className="inline-flex items-center px-6 py-3 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-colors font-medium"
            >
              Beratung vereinbaren
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.page}>
                  <button
                    onClick={() => {
                      if (item.submenu) {
                        setActiveDropdown(activeDropdown === item.page ? null : item.page);
                      } else {
                        handleNavigate(item.page);
                      }
                    }}
                    className={`w-full text-left font-medium transition-colors py-2 flex items-center justify-between ${
                      currentPage === item.page
                        ? 'text-[#4A3728]'
                        : 'text-gray-700 hover:text-[#8B7355]'
                    }`}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className={`size-4 transition-transform ${activeDropdown === item.page ? 'rotate-180' : ''}`} />}
                  </button>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && activeDropdown === item.page && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(subItem.page)}
                          className="w-full text-left text-sm text-gray-600 hover:text-[#8B7355] py-1"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleNavigate('contact')}
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