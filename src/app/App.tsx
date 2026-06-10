import { ArrowRight, Star, Phone, Mail, MapPin, Building2, Smartphone, ShieldCheck, Network, Users, Handshake, Landmark } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Toaster } from '@/app/components/ui/sonner';
import { ImageWithFallback } from '@/app/components/common/ImageWithFallback';
import { ServiceWheel } from '@/app/components/ServiceWheel';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ContentProvider, useContent } from '@/app/context/ContentContext';
import { PasswordModal } from '@/app/components/edit/PasswordModal';
import { EditPanel } from '@/app/components/edit/EditPanel';
import heroImage from '@/assets/about-hero-banner.jpg';
import advisorImage from '@/assets/advisor-portrait.jpg';
import testimonialBackground from '@/assets/testimonial-background.jpg';

const partners = [
  {
    name: 'Vanguard',
    label: 'Investmentpartner',
    description:
      'Vanguard steht für langfristigen Vermögensaufbau, breite Diversifikation und transparente Anlagelösungen. In der Beratung nutze ich diese Stärke, wenn robuste Investmentbausteine gefragt sind.',
    Icon: Building2,
    accent: 'from-[#f8fafc] to-[#dbeafe]',
  },
  {
    name: 'simplr',
    label: 'Digitale Versicherungsverwaltung',
    description:
      'simplr ergänzt die persönliche Beratung durch digitale Übersicht und einfache Verwaltung. So bleiben Verträge, Dokumente und wichtige Informationen jederzeit griffbereit.',
    Icon: Smartphone,
    accent: 'from-[#f7f2ec] to-[#e8ddd6]',
  },
  {
    name: 'blau direkt',
    label: 'Technologie- und Maklerpool',
    description:
      'blau direkt stellt als Technologiepartner moderne Infrastruktur für Vertragsverwaltung und Datenaustausch bereit. Davon profitierst du durch schnelle und zuverlässige digitale Prozesse.',
    Icon: Network,
    accent: 'from-[#f8fafc] to-[#dbeafe]',
  },
  {
    name: 'Maxpool',
    label: 'Maklerpool',
    description:
      'Maxpool eröffnet als Maklerpool den Zugang zu einer großen Auswahl an Versicherern und Tarifen. So kann ich unabhängig die Lösung finden, die wirklich zu dir passt.',
    Icon: Users,
    accent: 'from-[#f7f2ec] to-[#e8ddd6]',
  },
  {
    name: 'DMK Maklerkollektiv',
    label: 'Maklerverbund',
    description:
      'Das DMK Maklerkollektiv steht für gebündelte Expertise und den Austausch unter unabhängigen Maklern. Davon profitierst du durch geprüfte Konzepte und stets aktuelles Fachwissen.',
    Icon: Handshake,
    accent: 'from-[#f8fafc] to-[#dbeafe]',
  },
  {
    name: 'FR Finanzkontor',
    label: 'Finanzpartner',
    description:
      'Das FR Finanzkontor ergänzt meine Beratung mit zusätzlicher Expertise rund um Finanzierungen und Vermögensthemen. So erhältst du auch bei komplexen Fragen fundierte Lösungen.',
    Icon: Landmark,
    accent: 'from-[#f7f2ec] to-[#e8ddd6]',
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function soloText(text: string) {
  return text
    .replaceAll('Mehr über uns erfahren', 'Mehr über Tobias erfahren')
    .replaceAll('Kontaktiere uns direkt', 'Kontaktiere mich direkt')
    .replaceAll('Termin vereinbaren', 'Kostenlose Beratung vereinbaren')
    .replaceAll('Beratung vereinbaren', 'Kostenlose Beratung vereinbaren')
    .replaceAll('in unserem Kalender', "in Tobias' Kalender")
    .replaceAll('Wir freuen uns darauf, dich kennenzulernen.', 'Tobias freut sich darauf, dich kennenzulernen.')
    .replaceAll('Das Team beantwortet alle Fragen', 'Tobias beantwortet alle Fragen')
    .replaceAll('das Team beantwortet alle Fragen', 'Tobias beantwortet alle Fragen')
    .replaceAll('das Team von tobfinance', 'Tobias')
    .replaceAll('unser Team', 'Tobias')
    .replaceAll('Unser Team', 'Tobias');
}

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('tobfinance-cookie-consent');
    setIsVisible(!savedConsent);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  const saveConsent = (value: 'necessary' | 'all') => {
    localStorage.setItem(
      'tobfinance-cookie-consent',
      JSON.stringify({ value, answeredAt: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#061a38]/70 px-4 py-6 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85svh] overflow-y-auto rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/30">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1e3a5f] via-[#8B7355] to-[#2c4f7c]" />
        <div className="p-6 sm:p-8">
          <div className="mb-5 flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
              <ShieldCheck className="size-6 text-[#1e3a5f]" />
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7355]">
                Datenschutz
              </p>
              <h2 id="cookie-banner-title" className="text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
                Cookie-Einstellungen
              </h2>
            </div>
          </div>

          <p className="text-base leading-relaxed text-gray-600">
            Diese Website verwendet notwendige Cookies, damit sie technisch zuverlässig funktioniert.
            Mit deiner Zustimmung dürfen zusätzlich Analyse- und Komfort-Cookies eingesetzt werden, um die Seite weiter zu verbessern.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-[#1e3a5f]">Deine Auswahl ist erforderlich</p>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Du kannst die Website erst nutzen, nachdem du eine der Optionen ausgewählt hast.
            </p>
          </div>

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveConsent('necessary')}
              className="inline-flex items-center justify-center rounded-lg border border-[#1e3a5f]/20 bg-white px-6 py-3 font-semibold text-[#1e3a5f] transition-colors hover:bg-[#f8fafc]"
            >
              Nur notwendige Cookies
            </button>
            <button
              type="button"
              onClick={() => saveConsent('all')}
              className="inline-flex items-center justify-center rounded-lg bg-[#1e3a5f] px-6 py-3 font-semibold text-white shadow-lg shadow-[#1e3a5f]/20 transition-colors hover:bg-[#2c4f7c]"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SiteContent() {
  const { content } = useContent();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Keyboard shortcut: hold Shift and press T then R
  useEffect(() => {
    let tPressed = false;
    let timer: ReturnType<typeof setTimeout>;

    const handler = (e: KeyboardEvent) => {
      // Ignore if the user is typing in an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.shiftKey && e.key === 'T') {
        tPressed = true;
        clearTimeout(timer);
        timer = setTimeout(() => { tPressed = false; }, 2000);
      } else if (e.shiftKey && e.key === 'R' && tPressed) {
        tPressed = false;
        clearTimeout(timer);
        if (!editMode) setShowPasswordModal(true);
        else setEditMode(false);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [editMode]);
  const { hero, about, advisor, testimonial, reviews, contact } = content;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onScrollTo={scrollToSection} />

      <main className="flex-1 pt-20">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section id="hero" className="relative h-svh min-h-[640px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Professionelle Finanzberatung"
              className="w-full h-full object-cover object-[72%_top] md:object-[62%_center]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white/96 md:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-white via-white/90 to-white/0 md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/10 via-transparent to-transparent md:from-[#1e3a5f]/8" />
          <div className="container mx-auto px-4 relative z-10 h-full flex items-end pb-12 sm:items-center sm:pb-0">
            <div className="max-w-2xl text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8B7355]">
                Freier Finanz- und Versicherungsmakler
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-[#17304f] mb-6 leading-tight">
                {hero.title}
              </h1>
              <p className="text-lg md:text-xl text-[#2b3f5a] mb-8 leading-relaxed max-w-xl">
                {hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-all font-medium text-lg shadow-lg shadow-[#1e3a5f]/20 hover:shadow-xl"
                >
                  {hero.ctaPrimary}
                </button>
                <button
                  onClick={() => scrollToSection('ueber-mich')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/80 text-[#1e3a5f] border border-[#1e3a5f]/25 rounded-lg hover:bg-white transition-colors font-medium text-lg shadow-sm"
                >
                  {soloText(hero.ctaSecondary)}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <section id="ueber-mich" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] leading-tight">
                {about.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {soloText(about.description)}
              </p>
            </div>
          </div>
        </section>

        {/* ── Trusted Advisor ──────────────────────────────── */}
        <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0">
            <img src={testimonialBackground} alt="" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#061a38]/20" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-12">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-white/80 mx-auto mb-6 md:mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <cite className="text-lg text-white/90 not-italic">
                  — {testimonial.author}
                </cite>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#1e3a5f]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {advisor.title}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  {advisor.paragraph1}
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  {advisor.paragraph2}
                </p>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src={advisorImage}
                  alt="Tobias Rübner – Ihr Versicherungsmakler"
                  loading="lazy"
                  className="w-full h-[400px] md:h-[500px] object-cover object-[center_18%] rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>



        {/* ── Leistungen (Service Wheel) ────────────────────── */}
        <div id="leistungen">
          <ServiceWheel />
        </div>

        {/* ── Team ─────────────────────────────────────────── */}
        <section id="team" className="py-16 md:py-24 bg-[#1e3a5f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meine Partner</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Starke Firmenpartner, die meine Beratung sinnvoll ergänzen und dir moderne Lösungen für Investments und Versicherungsverwaltung ermöglichen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {partners.map((partner) => {
                const PartnerIcon = partner.Icon;

                return (
                <div
                  key={partner.name}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-colors border border-white/20"
                >
                  <div className={`h-44 bg-gradient-to-br ${partner.accent} flex items-center justify-center px-6`}>
                    <div className="flex items-center gap-3 text-[#1e3a5f]">
                      <PartnerIcon className="size-10 flex-shrink-0" />
                      <span className="text-2xl font-bold tracking-normal text-center">{partner.name}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-medium mb-2 text-white/60">{partner.label}</p>
                    <h3 className="text-2xl font-bold text-white mb-4">{partner.name}</h3>
                    <p className="text-white/80 leading-relaxed">{partner.description}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Google Reviews ────────────────────────────────── */}
        <section id="bewertungen" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <svg className="w-10 h-10" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">{reviews.sectionTitle}</h2>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-gray-800">{reviews.score.toFixed(1)}</span>
                </div>
                <p className="text-gray-600 text-lg">Basierend auf {reviews.totalReviews} Bewertungen</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {reviews.items.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed flex-1">{soloText(review.text)}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-semibold">
                        {review.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a
                  href="https://www.google.com/search?q=Tobias+R%C3%BCbner+Finanz-+und+Versicherungsmakler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1e3a5f] hover:text-[#2c4f7c] font-medium transition-colors"
                >
                  Alle Bewertungen auf Google ansehen
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Kontakt ──────────────────────────────────────── */}
        <section id="kontakt" className="py-20 md:py-32 bg-[#1e3a5f]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Headline */}
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {contact.title}
                </h2>
                <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
                  {soloText(contact.subtitle)}
                </p>
              </div>

              {/* Two-column layout: CTA  |  contact box */}
              <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">

                {/* CTA box */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-8 shadow-2xl shadow-black/20 flex flex-col justify-between">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1e3a5f] via-[#8B7355] to-[#2c4f7c]" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                      {soloText(contact.ctaTitle)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
                      {soloText(contact.ctaDescription)}
                    </p>
                  </div>
                  <button
                    onClick={() => window.open(contact.calendlyUrl, '_blank')}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-colors font-semibold text-lg shadow-lg shadow-[#1e3a5f]/20"
                  >
                    {contact.ctaButtonText}
                    <ArrowRight className="ml-2 size-5" />
                  </button>
                </div>

                {/* Contact box */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-8 shadow-2xl shadow-black/20 flex flex-col gap-5">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1e3a5f] via-[#8B7355] to-[#2c4f7c]" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f]">{soloText(contact.contactTitle)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      Für kurze Fragen oder eine schnelle Abstimmung erreichst du Tobias direkt.
                    </p>
                  </div>

                  {/* Phone – clickable button */}
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-5 bg-white hover:bg-[#f8fafc] border border-gray-200 rounded-xl transition-all hover:border-[#1e3a5f]/25 hover:shadow-md hover:shadow-[#1e3a5f]/5 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#1e3a5f]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e3a5f] transition-colors">
                      <Phone className="size-5 text-[#1e3a5f] group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Telefon</p>
                      <p className="text-[#1e3a5f] font-semibold truncate">{contact.phone}</p>
                    </div>
                    <ArrowRight className="size-5 text-gray-300 ml-auto group-hover:translate-x-1 group-hover:text-[#1e3a5f] transition-all" />
                  </a>

                  {/* E-Mail – clickable button */}
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 p-5 bg-white hover:bg-[#f8fafc] border border-gray-200 rounded-xl transition-all hover:border-[#1e3a5f]/25 hover:shadow-md hover:shadow-[#1e3a5f]/5 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#1e3a5f]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e3a5f] transition-colors">
                      <Mail className="size-5 text-[#1e3a5f] group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">E-Mail</p>
                      <p className="text-[#1e3a5f] font-semibold truncate">{contact.email}</p>
                    </div>
                    <ArrowRight className="size-5 text-gray-300 ml-auto group-hover:translate-x-1 group-hover:text-[#1e3a5f] transition-all" />
                  </a>

                  {/* Address – not clickable */}
                  <div className="flex items-center gap-4 p-5 border border-gray-200 bg-white rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-[#8B7355]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="size-5 text-[#8B7355]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Adresse</p>
                      <p className="text-gray-700 font-medium">{contact.address}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Antwort in der Regel zeitnah und persönlich durch Tobias.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onScrollTo={scrollToSection} />

      {/* ── Floating WhatsApp button ──────────────────────── */}
      <a
        href={`https://wa.me/${contact.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp schreiben"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <Toaster position="top-right" />
      <CookieBanner />

      {/* ── Password modal ────────────────────────────────── */}
      {showPasswordModal && (
        <PasswordModal
          onSuccess={() => { setShowPasswordModal(false); setEditMode(true); }}
          onClose={() => setShowPasswordModal(false)}
        />
      )}

      {/* ── Edit panel ───────────────────────────────────── */}
      {editMode && <EditPanel onClose={() => setEditMode(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <SiteContent />
    </ContentProvider>
  );
}
