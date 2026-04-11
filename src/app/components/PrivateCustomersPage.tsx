import { TrendingUp, Heart, Shield, Home, FileText, MoreHorizontal, ArrowRight } from 'lucide-react';

interface PrivateCustomersPageProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    icon: TrendingUp,
    title: 'Investment',
    description: 'Intelligente Geldanlage mit optimaler Rendite. Wir entwickeln Anlagestrategien, die zu deinen Zielen passen.',
    features: ['ETF-Portfolios', 'Fondssparpläne', 'Vermögensaufbau']
  },
  {
    icon: TrendingUp,
    title: 'Private Altersvorsorge',
    description: 'Sichere deinen Lebensstandard im Alter. Von Riester über Rürup bis zur privaten Rentenversicherung.',
    features: ['Riester-Rente', 'Rürup-Rente', 'Private Rentenversicherung']
  },
  {
    icon: Heart,
    title: 'Krankenversicherung',
    description: 'Bestmögliche medizinische Versorgung für dich und deine Familie – gesetzlich oder privat.',
    features: ['Private Krankenversicherung', 'Krankenzusatzversicherung', 'Auslandsreisekrankenversicherung']
  },
  {
    icon: Shield,
    title: 'Private Vorsorge',
    description: 'Schütze dich und deine Familie vor den finanziellen Folgen von Krankheit und Unfall.',
    features: ['Berufsunfähigkeitsversicherung', 'Unfallversicherung', 'Pflegeversicherung']
  },
  {
    icon: Home,
    title: 'Sachversicherung',
    description: 'Umfassender Schutz für dein Eigentum – vom Hausrat bis zur Wohngebäudeversicherung.',
    features: ['Hausratversicherung', 'Wohngebäudeversicherung', 'Kfz-Versicherung']
  },
  {
    icon: MoreHorizontal,
    title: 'Weitere Versicherungen',
    description: 'Spezielle Absicherungen für alle Lebenslagen – maßgeschneidert auf deine Bedürfnisse.',
    features: ['Haftpflichtversicherung', 'Rechtsschutzversicherung', 'Risikolebensversicherung']
  }
];

export function PrivateCustomersPage({ onNavigate }: PrivateCustomersPageProps) {
  const scrollToContact = () => {
    onNavigate('contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F5F0EB] via-white to-[#E8DDD6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-6">
              Maßgeschneiderte Lösungen für deine persönliche Absicherung
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Von der Altersvorsorge bis zur Sachversicherung – wir finden die perfekte Lösung für dich und deine Familie.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8B7355] to-[#7A6A5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für deine persönliche Absicherung?
            </h2>
            <p className="text-lg md:text-xl text-[#F5F0EB] mb-8 leading-relaxed">
              Vereinbare jetzt ein kostenloses Beratungsgespräch und lass uns gemeinsam die beste Lösung für dich finden.
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