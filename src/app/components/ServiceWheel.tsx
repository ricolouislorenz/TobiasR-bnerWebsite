import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '@/app/context/ContentContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CX = 250;
const CY = 250;
const INNER_R = 86;
const OUTER_R = 238;
const TEXT_R = 166;

function splitLabel(label: string) {
  const normalized = label.replace(/\s+/g, ' ').trim();
  const parts = normalized.split(' ');

  if (parts.length <= 1) return [normalized];
  if (normalized.length <= 6) return [normalized];
  if (parts.length === 2) return parts;

  const midpoint = Math.ceil(parts.length / 2);
  return [
    parts.slice(0, midpoint).join(' '),
    parts.slice(midpoint).join(' '),
  ];
}

function soloText(text: string) {
  return text
    .replaceAll('Wir entwickeln', 'Tobias entwickelt')
    .replaceAll('Wir analysieren', 'Tobias analysiert')
    .replaceAll('Wir begleiten', 'Tobias begleitet')
    .replaceAll('Wir vergleichen', 'Tobias vergleicht')
    .replaceAll('Wir finden', 'Tobias findet')
    .replaceAll('Wir sorgen', 'Tobias sorgt')
    .replaceAll('Wir kennen', 'Tobias kennt')
    .replaceAll('Wir beraten', 'Tobias berät')
    .replaceAll('Wir prüfen', 'Tobias prüft')
    .replaceAll('Wir helfen', 'Tobias hilft')
    .replaceAll('Wir klären', 'Tobias klärt')
    .replaceAll('wir entwickeln', 'Tobias entwickelt')
    .replaceAll('wir analysieren', 'Tobias analysiert')
    .replaceAll('wir begleiten', 'Tobias begleitet')
    .replaceAll('wir vergleichen', 'Tobias vergleicht')
    .replaceAll('wir finden', 'Tobias findet')
    .replaceAll('wir sorgen', 'Tobias sorgt')
    .replaceAll('wir kennen', 'Tobias kennt')
    .replaceAll('wir beraten', 'Tobias berät')
    .replaceAll('wir prüfen', 'Tobias prüft')
    .replaceAll('wir helfen', 'Tobias hilft')
    .replaceAll('wir klären', 'Tobias klärt');
}

export function ServiceWheel() {
  const { content } = useContent();
  const [customerType, setCustomerType] = useState<'private' | 'business'>('private');
  const [activeIndex, setActiveIndex] = useState(0);

  const services = customerType === 'private' ? content.privateServices : content.businessServices;
  const segmentAngle = 360 / services.length;
  const activeService = services[activeIndex];

  const fontSize = services.length > 8 ? 11 : 13;
  const lineSpacing = services.length > 8 ? 13 : 16;

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
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* ── Wheel ── */}
            <div className="flex min-h-[560px] justify-center lg:sticky lg:top-28">
              <div className="relative w-full max-w-[560px] aspect-square rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 shadow-xl shadow-[#1e3a5f]/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={customerType}
                    initial={{ opacity: 0, scale: 0.96, rotate: customerType === 'private' ? -4 : 4 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.96, rotate: customerType === 'private' ? 4 : -4 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full"
                  >
                <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-sm">
                  <defs>
                    <radialGradient id="serviceWheelActive" cx="50%" cy="50%" r="70%">
                      <stop offset="0%" stopColor="#2c4f7c" />
                      <stop offset="100%" stopColor="#1e3a5f" />
                    </radialGradient>
                    <radialGradient id="serviceWheelIdle" cx="50%" cy="50%" r="75%">
                      <stop offset="0%" stopColor="#a08a69" />
                      <stop offset="100%" stopColor="#7A6A5D" />
                    </radialGradient>
                  </defs>
                  <circle cx={CX} cy={CY} r={OUTER_R + 8} fill="#f8fafc" stroke="#e5e7eb" strokeWidth="1" />
                  {/* Centre disc */}
                  <circle cx={CX} cy={CY} r={INNER_R - 4} fill="#1e3a5f" stroke="white" strokeWidth="5" />
                  <text
                    x={CX}
                    y={CY - 8}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="18"
                    fontWeight="bold"
                    className="pointer-events-none select-none"
                  >
                    {customerType === 'private' ? 'Privat' : 'Gewerbe'}
                  </text>
                  <text
                    x={CX}
                    y={CY + 18}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="rgba(255,255,255,0.72)"
                    fontSize="10"
                    fontWeight="600"
                    className="pointer-events-none select-none"
                  >
                    Leistungen
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
                    const activeOffset = isActive ? 7 : 0;
                    const offsetX = activeOffset * Math.cos(midAngle);
                    const offsetY = activeOffset * Math.sin(midAngle);
                    const textX = CX + TEXT_R * Math.cos(midAngle);
                    const textY = CY + TEXT_R * Math.sin(midAngle);

                    let textRotation = midAngleDeg;
                    if (midAngleDeg > 90 && midAngleDeg <= 270) textRotation += 180;

                    const labelLines = splitLabel(service.shortTitle ?? service.title);
                    const halfSpacing = lineSpacing / 2;

                    return (
                      <g
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className="cursor-pointer"
                        transform={`translate(${offsetX} ${offsetY})`}
                      >
                        <path
                          d={pathData}
                          fill={isActive ? 'url(#serviceWheelActive)' : 'url(#serviceWheelIdle)'}
                          stroke="white"
                          strokeWidth={isActive ? 3 : 2}
                          opacity={isActive ? 1 : 0.9}
                          className="transition-all hover:opacity-100"
                        />
                        <text
                          fill="white"
                          fontSize={fontSize}
                          fontWeight={isActive ? 800 : 650}
                          textAnchor="middle"
                          className="pointer-events-none select-none"
                          transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                        >
                          {labelLines.length > 1 ? (
                            <>
                              <tspan x={textX} y={textY - halfSpacing}>{labelLines[0]}</tspan>
                              <tspan x={textX} y={textY + halfSpacing}>{labelLines[1]}</tspan>
                            </>
                          ) : (
                            <tspan x={textX} y={textY} dominantBaseline="middle">{labelLines[0]}</tspan>
                          )}
                        </text>
                      </g>
                    );
                  })}
                </svg>
                  </motion.div>
                </AnimatePresence>
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
                  className="relative overflow-hidden rounded-2xl border border-[#1e3a5f]/10 bg-white shadow-2xl shadow-[#1e3a5f]/10"
                >
                  {/* Headline – no icon */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1e3a5f] via-[#8B7355] to-[#2c4f7c]" />

                  <div className="p-7 md:p-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7355]">
                          {customerType === 'private' ? 'Privatkunden' : 'Gewerbekunden'}
                        </p>
                        <h3 className="text-3xl font-bold leading-tight text-[#1e3a5f]">
                          {activeService.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mb-7 text-base leading-relaxed text-gray-700">
                      {soloText(activeService.description)}
                    </p>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-gray-500">
                        Schwerpunkte
                      </p>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {activeService.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#8B7355]" />
                            <span className="text-sm font-medium leading-relaxed text-gray-800">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                      className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-6 py-4 font-semibold text-white shadow-lg shadow-[#1e3a5f]/20 transition-colors hover:bg-[#2c4f7c] sm:w-auto"
                    >
                      Kostenlose Beratung vereinbaren
                      <ArrowRight className="size-5 shrink-0" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
