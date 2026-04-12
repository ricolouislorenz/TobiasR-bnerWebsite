import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '@/app/context/ContentContext';

const CX = 250;
const CY = 250;
const INNER_R = 92;
const OUTER_R = 235;
const TEXT_R = 163;

export function ServiceWheel() {
  const { content } = useContent();
  const [customerType, setCustomerType] = useState<'private' | 'business'>('private');
  const [activeIndex, setActiveIndex] = useState(0);

  const services = customerType === 'private' ? content.privateServices : content.businessServices;
  const segmentAngle = 360 / services.length;
  const activeService = services[activeIndex];

  const fontSize = services.length > 8 ? 9 : 12;
  const lineSpacing = services.length > 8 ? 12 : 15;

  const handleCustomerTypeChange = (type: 'private' | 'business') => {
    setCustomerType(type);
    setActiveIndex(0);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a5f] mb-6">
            Meine Leistungen
          </h2>

          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {(['private', 'business'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => handleCustomerTypeChange(type)}
                  className={`px-8 py-3 rounded-lg font-medium transition-all ${
                    customerType === type
                      ? 'bg-[#1e3a5f] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {type === 'private' ? 'Privatkunden' : 'Gewerbekunden'}
                </button>
              ))}
            </div>
          </div>

          {/* Wheel + Detail panel */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ── Wheel ── */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[520px] aspect-square">
                <svg viewBox="0 0 500 500" className="w-full h-full">
                  {/* Centre disc */}
                  <circle cx={CX} cy={CY} r={INNER_R - 4} fill="#1e3a5f" />
                  <text
                    x={CX}
                    y={CY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    className="pointer-events-none select-none"
                  >
                    {customerType === 'private' ? 'Privat' : 'Gewerbe'}
                  </text>

                  {services.map((service, index) => {
                    const startAngle = (index * segmentAngle - 90) * (Math.PI / 180);
                    const endAngle   = ((index + 1) * segmentAngle - 90) * (Math.PI / 180);
                    const midAngle   = (startAngle + endAngle) / 2;
                    const midAngleDeg = midAngle * (180 / Math.PI);

                    const x1 = CX + INNER_R * Math.cos(startAngle);
                    const y1 = CY + INNER_R * Math.sin(startAngle);
                    const x2 = CX + OUTER_R * Math.cos(startAngle);
                    const y2 = CY + OUTER_R * Math.sin(startAngle);
                    const x3 = CX + OUTER_R * Math.cos(endAngle);
                    const y3 = CY + OUTER_R * Math.sin(endAngle);
                    const x4 = CX + INNER_R * Math.cos(endAngle);
                    const y4 = CY + INNER_R * Math.sin(endAngle);
                    const largeArc = segmentAngle > 180 ? 1 : 0;

                    const pathData = [
                      `M ${x1} ${y1}`,
                      `L ${x2} ${y2}`,
                      `A ${OUTER_R} ${OUTER_R} 0 ${largeArc} 1 ${x3} ${y3}`,
                      `L ${x4} ${y4}`,
                      `A ${INNER_R} ${INNER_R} 0 ${largeArc} 0 ${x1} ${y1}`,
                      'Z',
                    ].join(' ');

                    const isActive = index === activeIndex;
                    const textX = CX + TEXT_R * Math.cos(midAngle);
                    const textY = CY + TEXT_R * Math.sin(midAngle);

                    let textRotation = midAngleDeg;
                    if (midAngleDeg > 90 && midAngleDeg <= 270) textRotation += 180;

                    const label = service.shortTitle ?? service.title;
                    const spaceIdx = label.indexOf(' ');
                    const line1 = spaceIdx !== -1 ? label.slice(0, spaceIdx) : label;
                    const line2 = spaceIdx !== -1 ? label.slice(spaceIdx + 1) : null;
                    const halfSpacing = lineSpacing / 2;

                    return (
                      <g key={index} onClick={() => setActiveIndex(index)} className="cursor-pointer">
                        <path
                          d={pathData}
                          fill={isActive ? '#1e3a5f' : '#8B7355'}
                          stroke="white"
                          strokeWidth="2"
                          opacity={isActive ? 1 : 0.82}
                          className="transition-opacity hover:opacity-100"
                        />
                        <text
                          fill="white"
                          fontSize={fontSize}
                          fontWeight={isActive ? 'bold' : 'normal'}
                          textAnchor="middle"
                          className="pointer-events-none select-none"
                          transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                        >
                          {line2 ? (
                            <>
                              <tspan x={textX} y={textY - halfSpacing}>{line1}</tspan>
                              <tspan x={textX} y={textY + halfSpacing}>{line2}</tspan>
                            </>
                          ) : (
                            <tspan x={textX} y={textY} dominantBaseline="middle">{line1}</tspan>
                          )}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* ── Detail panel ── */}
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
                  {/* Headline – no icon */}
                  <h3 className="text-3xl font-bold mb-6">{activeService.title}</h3>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {activeService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                        <span className="text-white/90 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 6-line description */}
                  <p className="text-base leading-relaxed text-white/80">
                    {activeService.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
