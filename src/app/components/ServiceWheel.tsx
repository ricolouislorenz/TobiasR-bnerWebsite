import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Heart, Shield, Home, FileText, MoreHorizontal, Scale, DollarSign, Users, Package, Wifi, Truck, UserCheck } from 'lucide-react';

interface Service {
  icon: any;
  title: string;
  description: string;
  features?: string[];
}

const privateServices: Service[] = [
  {
    icon: TrendingUp,
    title: 'Investment',
    description: 'Intelligente Geldanlage mit optimaler Rendite. Wir entwickeln Anlagestrategien, die zu deinen Zielen passen.',
    features: ['ETF-Portfolios', 'Fondssparpläne', 'Vermögensaufbau']
  },
  {
    icon: TrendingUp,
    title: 'Altersvorsorge',
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

const businessServices: Service[] = [
  {
    icon: Shield,
    title: 'Betriebshaftpflicht',
    description: 'Schutz vor Schadensersatzansprüchen im Geschäftsalltag.',
    features: ['Personen- und Sachschäden', 'Vermögensschäden', 'Umweltschäden']
  },
  {
    icon: Scale,
    title: 'Firmenrechtschutz',
    description: 'Rechtliche Absicherung für dein Unternehmen in allen Lebenslagen.',
    features: ['Arbeitsrecht', 'Vertragsrecht', 'Steuerrecht']
  },
  {
    icon: DollarSign,
    title: 'Vermögensschadenhaftpflicht',
    description: 'Absicherung gegen finanzielle Schäden durch Beratungsfehler.',
    features: ['Beratungsfehler', 'Planungsfehler', 'Vermögensschäden']
  },
  {
    icon: Users,
    title: 'Directors & Officers',
    description: 'Schutz für Geschäftsführer und Vorstände vor persönlicher Haftung.',
    features: ['D&O-Versicherung', 'Managerhaftung', 'Organhaftung']
  },
  {
    icon: Package,
    title: 'Geschäftsinhalt',
    description: 'Umfassender Schutz für Betriebseinrichtung und Waren.',
    features: ['Inventar', 'Waren', 'Maschinen']
  },
  {
    icon: Wifi,
    title: 'Cyber-Absicherung',
    description: 'Schutz vor digitalen Risiken und Cyberangriffen.',
    features: ['Datenschutzverletzungen', 'Hackerangriffe', 'IT-Ausfälle']
  },
  {
    icon: Truck,
    title: 'Transport',
    description: 'Absicherung von Warentransporten und Logistik.',
    features: ['Transportversicherung', 'Logistikrisiken', 'Frachtschäden']
  },
  {
    icon: TrendingUp,
    title: 'Betriebliche Altersvorsorge',
    description: 'Steueroptimierte Altersvorsorge für deine Mitarbeiter.',
    features: ['Direktversicherung', 'Pensionskasse', 'Pensionsfonds']
  },
  {
    icon: Heart,
    title: 'Betriebliche Krankenversicherung',
    description: 'Zusätzliche Gesundheitsleistungen als Mitarbeiter-Benefit.',
    features: ['Ambulante Leistungen', 'Zahnersatz', 'Sehhilfen']
  },
  {
    icon: Shield,
    title: 'Gruppenunfallversicherung',
    description: 'Rundum-Schutz für deine Mitarbeiter bei Unfällen.',
    features: ['24h-Schutz', 'Invaliditätsleistung', 'Unfallrente']
  },
  {
    icon: UserCheck,
    title: 'Betriebliche BU',
    description: 'Absicherung des Einkommens deiner Mitarbeiter.',
    features: ['Berufsunfähigkeitsrente', 'Arbeitskraftabsicherung', 'Einkommensschutz']
  },
  {
    icon: Heart,
    title: 'Betriebliche Pflegeversicherung',
    description: 'Vorsorge für den Pflegefall deiner Angestellten.',
    features: ['Pflegegeld', 'Pflegesachleistungen', 'Pflegeberatung']
  }
];

export function ServiceWheel() {
  const [customerType, setCustomerType] = useState<'private' | 'business'>('private');
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const services = customerType === 'private' ? privateServices : businessServices;
  const segmentAngle = 360 / services.length;
  const activeService = services[activeIndex];

  const handleServiceClick = (index: number) => {
    const angleDiff = (index - activeIndex) * segmentAngle;
    setRotation(rotation - angleDiff);
    setActiveIndex(index);
  };

  const handleCustomerTypeChange = (type: 'private' | 'business') => {
    setCustomerType(type);
    setActiveIndex(0);
    setRotation(0);
  };

  const IconComponent = activeService.icon;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a5f] mb-12">
            Meine Leistungen
          </h2>

          {/* Customer Type Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => handleCustomerTypeChange('private')}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  customerType === 'private'
                    ? 'bg-[#1e3a5f] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Privatkunden
              </button>
              <button
                onClick={() => handleCustomerTypeChange('business')}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  customerType === 'business'
                    ? 'bg-[#1e3a5f] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Gewerbekunden
              </button>
            </div>
          </div>

          {/* Wheel and Details */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Wheel */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.6s ease-out' }}
                >
                  {/* Center Circle */}
                  <circle cx="200" cy="200" r="80" fill="#1e3a5f" />
                  <text
                    x="200"
                    y="200"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {customerType === 'private' ? 'Privat' : 'Gewerbe'}
                  </text>

                  {/* Segments */}
                  {services.map((service, index) => {
                    const startAngle = (index * segmentAngle - 90) * (Math.PI / 180);
                    const endAngle = ((index + 1) * segmentAngle - 90) * (Math.PI / 180);
                    const innerRadius = 85;
                    const outerRadius = 180;

                    const x1 = 200 + innerRadius * Math.cos(startAngle);
                    const y1 = 200 + innerRadius * Math.sin(startAngle);
                    const x2 = 200 + outerRadius * Math.cos(startAngle);
                    const y2 = 200 + outerRadius * Math.sin(startAngle);
                    const x3 = 200 + outerRadius * Math.cos(endAngle);
                    const y3 = 200 + outerRadius * Math.sin(endAngle);
                    const x4 = 200 + innerRadius * Math.cos(endAngle);
                    const y4 = 200 + innerRadius * Math.sin(endAngle);

                    const largeArc = segmentAngle > 180 ? 1 : 0;

                    const pathData = [
                      `M ${x1} ${y1}`,
                      `L ${x2} ${y2}`,
                      `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3}`,
                      `L ${x4} ${y4}`,
                      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}`,
                      'Z'
                    ].join(' ');

                    const isActive = index === activeIndex;
                    const midAngle = startAngle + (endAngle - startAngle) / 2;
                    const textRadius = (innerRadius + outerRadius) / 2;
                    const textX = 200 + textRadius * Math.cos(midAngle);
                    const textY = 200 + textRadius * Math.sin(midAngle);

                    return (
                      <g key={index}>
                        <path
                          d={pathData}
                          fill={isActive ? '#1e3a5f' : '#8B7355'}
                          stroke="white"
                          strokeWidth="2"
                          className="cursor-pointer transition-all hover:opacity-80"
                          onClick={() => handleServiceClick(index)}
                          style={{
                            transformOrigin: '200px 200px',
                            transform: isActive ? 'scale(1.05)' : 'scale(1)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                        <text
                          x={textX}
                          y={textY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize="12"
                          fontWeight={isActive ? 'bold' : 'normal'}
                          className="pointer-events-none"
                          style={{
                            transform: `rotate(${-(rotation)}deg)`,
                            transformOrigin: `${textX}px ${textY}px`
                          }}
                        >
                          {service.title.length > 20 ? service.title.substring(0, 18) + '...' : service.title}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Right: Service Details */}
            <div className="lg:pl-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${customerType}-${activeIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#1e3a5f] to-[#2c4f7c] text-white p-8 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/20 rounded-lg">
                      <IconComponent className="size-12" />
                    </div>
                    <h3 className="text-3xl font-bold">{activeService.title}</h3>
                  </div>

                  <p className="text-lg leading-relaxed mb-6 text-white/90">
                    {activeService.description}
                  </p>

                  {activeService.features && activeService.features.length > 0 && (
                    <div>
                      <h4 className="font-bold text-xl mb-3">Leistungen im Überblick:</h4>
                      <ul className="space-y-2">
                        {activeService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-white/60 mt-1">•</span>
                            <span className="text-white/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
