import { Shield, Scale, DollarSign, Users, Package, Wifi, Truck, UserCheck, TrendingUp, Heart, ArrowRight } from 'lucide-react';

interface BusinessCustomersPageProps {
  onNavigate: (page: string) => void;
}

const companyServices = [
  {
    icon: Shield,
    title: 'Betriebshaftpflicht',
    description: 'Schutz vor Schadensersatzansprüchen im Geschäftsalltag.'
  },
  {
    icon: Scale,
    title: 'Firmenrechtschutz',
    description: 'Rechtliche Absicherung für dein Unternehmen in allen Lebenslagen.'
  },
  {
    icon: DollarSign,
    title: 'Vermögensschadenhaftpflicht',
    description: 'Absicherung gegen finanzielle Schäden durch Beratungsfehler.'
  },
  {
    icon: Users,
    title: 'Directors & Officers',
    description: 'Schutz für Geschäftsführer und Vorstände vor persönlicher Haftung.'
  },
  {
    icon: Package,
    title: 'Geschäftsinhalt',
    description: 'Umfassender Schutz für Betriebseinrichtung und Waren.'
  },
  {
    icon: Wifi,
    title: 'Cyber- und Internetabsicherung',
    description: 'Schutz vor digitalen Risiken und Cyberangriffen.'
  },
  {
    icon: Truck,
    title: 'Transport',
    description: 'Absicherung von Warentransporten und Logistik.'
  }
];

const employeeServices = [
  {
    icon: TrendingUp,
    title: 'Betriebliche Altersvorsorge (bAV)',
    description: 'Steueroptimierte Altersvorsorge für deine Mitarbeiter.'
  },
  {
    icon: Heart,
    title: 'Betriebliche Krankenversicherung (bKV)',
    description: 'Zusätzliche Gesundheitsleistungen als Mitarbeiter-Benefit.'
  },
  {
    icon: Shield,
    title: 'Betriebliche Gruppenunfallversicherung',
    description: 'Rundum-Schutz für deine Mitarbeiter bei Unfällen.'
  },
  {
    icon: UserCheck,
    title: 'Betriebliche Berufsunfähigkeitsversicherung (BU)',
    description: 'Absicherung des Einkommens deiner Mitarbeiter.'
  },
  {
    icon: Heart,
    title: 'Betriebliche Pflegeversicherung',
    description: 'Vorsorge für den Pflegefall deiner Angestellten.'
  }
];

export function BusinessCustomersPage({ onNavigate }: BusinessCustomersPageProps) {
  const scrollToContact = () => {
    onNavigate('contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#E8DDD6] via-white to-[#F5F0EB]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-6">
              Umfassender Schutz für dein Unternehmen
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Von der Betriebshaftpflicht bis zur Cyber-Versicherung – wir sichern dein Business und deine Mitarbeiter optimal ab.
            </p>
          </div>
        </div>
      </section>

      {/* Company Insurance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-4">
              Unternehmensversicherungen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schütze dein Unternehmen vor existenziellen Risiken
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {companyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-[#8B7355]/20 overflow-hidden group"
              >
                <div className={`p-6 ${index % 2 === 0 ? 'bg-gradient-to-br from-[#8B7355] to-[#7A6A5D]' : 'bg-gradient-to-br from-[#4A3728] to-[#5D4837]'}`}>
                  <service.icon className="size-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Insurance Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F5F0EB] via-white to-[#E8DDD6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-4">
              Mitarbeiterversicherungen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Attraktive Benefits für dein Team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {employeeServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-[#8B7355]/20 overflow-hidden group"
              >
                <div className={`p-6 ${index % 2 === 0 ? 'bg-gradient-to-br from-[#4A3728] to-[#5D4837]' : 'bg-gradient-to-br from-[#8B7355] to-[#7A6A5D]'}`}>
                  <service.icon className="size-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4A3728] to-[#5D4837] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit, dein Unternehmen optimal abzusichern?
            </h2>
            <p className="text-lg md:text-xl text-[#E8DDD6] mb-8 leading-relaxed">
              Vereinbare jetzt ein kostenloses Beratungsgespräch und lass uns gemeinsam die beste Lösung für dein Business finden.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-8 py-4 bg-white text-[#4A3728] rounded-lg hover:bg-[#F5F0EB] transition-colors font-medium text-lg shadow-lg"
            >
              Kostenlose Beratung vereinbaren
              <ArrowRight className="ml-2 size-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}