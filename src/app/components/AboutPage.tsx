import { Target, Heart, Shield, ArrowRight, Building2, Smartphone } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const partners = [
  {
    name: 'Vanguard',
    label: 'Investmentpartner',
    description: 'Vanguard steht für langfristigen Vermögensaufbau, breite Diversifikation und transparente Anlagelösungen. In der Beratung nutze ich diese Stärke, wenn robuste Investmentbausteine gefragt sind.',
    Icon: Building2,
    accent: 'from-[#1e3a5f] to-[#2c4f7c]'
  },
  {
    name: 'simplr',
    label: 'Digitale Versicherungsverwaltung',
    description: 'simplr ergänzt die persönliche Beratung durch digitale Übersicht und einfache Verwaltung. So bleiben Verträge, Dokumente und wichtige Informationen jederzeit griffbereit.',
    Icon: Smartphone,
    accent: 'from-[#8B7355] to-[#7A6A5D]'
  }
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#E8DDD6] via-white to-[#F5F0EB]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-6">
              Willkommen bei tobfinance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Dein vertrauenswürdiger Partner in der Finanzwelt! Bei tobfinance verstehen wir, dass finanzielle Entscheidungen oft komplex und herausfordernd sein können. Unser Ziel ist es, dir dabei zu helfen, die besten Lösungen für deine individuellen Bedürfnisse zu finden und deine finanziellen Ziele zu erreichen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-6">
                Unsere Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wir glauben daran, dass jeder Mensch Zugang zu hochwertiger Finanzberatung haben sollte. Deshalb setzen wir auf Transparenz, persönlichen Service und innovative Lösungen. Unser Team aus erfahrenen Experten ist leidenschaftlich daran interessiert, dir dabei zu helfen, deine Finanzen optimal zu gestalten und deine Ziele zu verwirklichen.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gradient-to-br from-[#E8DDD6] to-white rounded-xl border border-[#8B7355]/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4A3728] text-white rounded-full mb-4">
                  <Shield className="size-8" />
                </div>
                <h3 className="text-xl font-bold text-[#4A3728] mb-3">Transparenz</h3>
                <p className="text-gray-600">
                  Ehrliche und offene Kommunikation in allen Belangen
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#8B7355]/10 to-white rounded-xl border border-[#8B7355]/30">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B7355] text-white rounded-full mb-4">
                  <Heart className="size-8" />
                </div>
                <h3 className="text-xl font-bold text-[#4A3728] mb-3">Vertrauen</h3>
                <p className="text-gray-600">
                  Langfristige Partnerschaften basierend auf gegenseitigem Respekt
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#E8DDD6] to-white rounded-xl border border-[#8B7355]/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4A3728] text-white rounded-full mb-4">
                  <Target className="size-8" />
                </div>
                <h3 className="text-xl font-bold text-[#4A3728] mb-3">Engagement</h3>
                <p className="text-gray-600">
                  Vollständiger Einsatz für deinen finanziellen Erfolg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F5F0EB] via-white to-[#E8DDD6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-4">
              Meine Partner
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Starke Firmenpartner, die meine Beratung sinnvoll ergänzen und dir moderne Lösungen für Investments und Versicherungsverwaltung ermöglichen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partners.map((partner) => {
              const PartnerIcon = partner.Icon;

              return (
                <div key={partner.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-[#8B7355]/20">
                  <div className={`h-44 bg-gradient-to-br ${partner.accent} flex items-center justify-center px-8`}>
                    <div className="flex items-center gap-4 text-white">
                      <PartnerIcon className="size-12" />
                      <span className="text-4xl font-bold tracking-normal">{partner.name}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#8B7355] font-medium mb-2">{partner.label}</p>
                    <h3 className="text-2xl font-bold text-[#4A3728] mb-4">{partner.name}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8B7355] to-[#7A6A5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Lass uns gemeinsam deine Zukunft gestalten
            </h2>
            <p className="text-lg md:text-xl text-[#F5F0EB] mb-8 leading-relaxed">
              Vereinbare jetzt ein kostenloses Erstgespräch und lerne meine Arbeitsweise persönlich kennen.
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
