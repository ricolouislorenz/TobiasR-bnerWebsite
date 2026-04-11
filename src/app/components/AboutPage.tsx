import { Target, Eye, Heart, Shield, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const teamMembers = [
  {
    name: 'Tobias Rübner',
    role: 'Gründer & Inhaber',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwbWFufGVufDF8fHx8MTc2OTIxMDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Moin, ich bin Tobi - Gründer und Inhaber von tobfinance. Ich bin davon überzeugt, dass jeder Mensch eine maximal unabhängige und individuelle Beratung verdient hat. Diese Vision als Makler verfolgen zu können, treibt mich jeden Tag mit großer Leidenschaft an. Ich konzentriere mich dabei auf individuelle Bedürfnisse, digitale Prozesse und eine unabhängige Betreuung, um maßgeschneiderte Lösungen zu entwickeln, die stets für eine moderne und transparente Kundenbeziehung sorgen.',
    highlight: 'Durch mehrjährige Erfahrung in der Finanz- und Versicherungsbranche unterstütze ich dich mit umfangreichen Fachwissen und einem tiefen Verständnis für die Bedürfnisse unserer Zielgruppe. Gemeinsam mit unserem motivierten Team gestalten wir persönliche Konzepte für dich und verfolgen das Ziel einer langfristigen und lebensbegleitenden Kundenbeziehung.'
  },
  {
    name: 'Anica Ohl',
    role: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1610387694365-19fafcc86d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwd29tYW58ZW58MXx8fHwxNzY5MjM2NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Hallo, ich bin Anica und verantworte bei tobfinance alle operativen Tätigkeiten. Mir ist es wichtig, dass unsere Kunden und Kundinnen zu 100% zufrieden und vollumfänglich betreut werden. Mich treibt die Motivation an, allen Menschen den Zugang zu einer fairen und transparenten Finanzberatung zu ermöglichen. Zentraler Bestandteil dabei ist, eine persönliche und professionelle Betreuung zu gewährleisten, um bestmöglich alle Bedürfnisse und Wünsche unserer Mandanten zu erkennen und diese in unsere Beratung zu integrieren.',
    highlight: 'Durch ihre exzellente Organisationsstruktur und tiefen Kenntnisse im Personalbereich, bildet Anica den Grundstein für eine erfolgreiche Arbeit des gesamten Teams. Bei Anica bekommt jeder das Gefühl, dass sie dafür brennt, für alle Mandanten sogar mehr als 100% rauszuholen und daher stets für Optimierung in allen Bereichen sorgt.'
  },
  {
    name: 'Laura Fritschen',
    role: 'Consultant',
    image: 'https://images.unsplash.com/photo-1612116144183-d1ba477239f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwY29uc3VsdGFudHxlbnwxfHx8fDE3NjkyOTEwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Moin, ich bin Laura und bin als Consultant mit voller Begeisterung Teil unseres Teams. Ich bin überzeugt: Wer Unternehmen wirklich verstehen will, muss genau zuhören, querdenken und mit Mut neue Wege gehen.',
    highlight: 'Als Consultant unterstütze ich unsere Kund:innen mit frischem Blick, analytischer Stärke und einem Gespür für praxisnahe Lösungen. Mein Fokus liegt darauf, komplexe Herausforderungen greifbar zu machen und gemeinsam effiziente Strategien zu entwickeln – ehrlich, strukturiert und mit einem echten Interesse am Menschen hinter dem Unternehmen. Durch meine akademische Ausbildung und Erfahrungen in Beratungsprojekten bringe ich fundiertes Wissen mit und gleichzeitig die Neugier, mich ständig weiterzuentwickeln.'
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

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F5F0EB] via-white to-[#E8DDD6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lerne die Menschen kennen, die sich täglich für deine finanzielle Zukunft einsetzen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-[#8B7355]/20">
                <div className={`h-64 ${index % 2 === 0 ? 'bg-gradient-to-br from-[#4A3728] to-[#5D4837]' : 'bg-gradient-to-br from-[#8B7355] to-[#7A6A5D]'} flex items-center justify-center`}>
                  <User className="size-32 text-white/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#4A3728] mb-1">{member.name}</h3>
                  <p className={`${index % 2 === 0 ? 'text-[#8B7355]' : 'text-[#4A3728]'} font-medium mb-4`}>{member.role}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.description}
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
              Lass uns gemeinsam deine Zukunft gestalten
            </h2>
            <p className="text-lg md:text-xl text-[#F5F0EB] mb-8 leading-relaxed">
              Vereinbare jetzt ein kostenloses Erstgespräch und lerne unser Team persönlich kennen.
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