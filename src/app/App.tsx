import { ArrowRight, Star, User, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Toaster } from '@/app/components/ui/sonner';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServiceWheel } from '@/app/components/ServiceWheel';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ContentProvider, useContent } from '@/app/context/ContentContext';
import { PasswordModal } from '@/app/components/edit/PasswordModal';
import { EditPanel } from '@/app/components/edit/EditPanel';
import heroImage from 'figma:asset/6467f72be9776f7498d29ca7ab24b5ffe88f5d6b.png';
import advisorImage from 'figma:asset/10d054954305be252875738da7bd914256623f57.png';
import cityImage from 'figma:asset/1cc39275293273730f15b274934f46b4fd3d67b5.png';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
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
  const { hero, about, advisor, testimonial, team, reviews, contact } = content;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onScrollTo={scrollToSection} />

      <main className="flex-1 pt-20">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Professionelle Finanzberatung"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                {hero.title}
              </h1>
              <p className="text-lg md:text-xl text-[#2c4f7c] mb-8 leading-relaxed max-w-xl">
                {hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-all font-medium text-lg shadow-lg hover:shadow-xl"
                >
                  {hero.ctaPrimary}
                </button>
                <button
                  onClick={() => scrollToSection('team')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg"
                >
                  {hero.ctaSecondary}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] leading-tight">
                {about.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {about.description}
              </p>
            </div>
          </div>
        </section>

        {/* ── Trusted Advisor ──────────────────────────────── */}
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
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonial ──────────────────────────────────── */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0">
            <img src={cityImage} alt="Hamburg Skyline" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <svg className="w-16 h-16 text-white/80 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
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

        {/* ── Leistungen (Service Wheel) ────────────────────── */}
        <div id="leistungen">
          <ServiceWheel />
        </div>

        {/* ── Team ─────────────────────────────────────────── */}
        <section id="team" className="py-16 md:py-24 bg-[#1e3a5f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{team.sectionTitle}</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                {team.sectionSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-colors border border-white/20"
                >
                  <div className="h-64 flex items-center justify-center bg-white/10">
                    <User className="size-32 text-white/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="font-medium mb-4 text-white/60">{member.role}</p>
                    <p className="text-white/80 leading-relaxed text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
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
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                    <div className="flex items-center gap-3">
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
                  href="https://www.google.com/search?q=tobfinance"
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
            <div className="max-w-5xl mx-auto">

              {/* Headline */}
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {contact.title}
                </h2>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                  {contact.subtitle}
                </p>
              </div>

              {/* Two-column layout: CTA  |  contact box */}
              <div className="grid md:grid-cols-2 gap-8 items-stretch">

                {/* CTA box */}
                <div className="bg-white rounded-2xl p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                      {contact.ctaTitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {contact.ctaDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => window.open(contact.calendlyUrl, '_blank')}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#1e3a5f] text-white rounded-xl hover:bg-[#2c4f7c] transition-colors font-semibold text-lg shadow-md"
                  >
                    {contact.ctaButtonText}
                    <ArrowRight className="ml-2 size-5" />
                  </button>
                </div>

                {/* Contact box */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col gap-6">
                  <h3 className="text-xl font-semibold text-white">{contact.contactTitle}</h3>

                  {/* Phone – clickable button */}
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <Phone className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">Telefon</p>
                      <p className="text-white font-semibold">{contact.phone}</p>
                    </div>
                    <ArrowRight className="size-4 text-white/40 ml-auto group-hover:text-white/80 transition-colors" />
                  </a>

                  {/* E-Mail – clickable button */}
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <Mail className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">E-Mail</p>
                      <p className="text-white font-semibold">{contact.email}</p>
                    </div>
                    <ArrowRight className="size-4 text-white/40 ml-auto group-hover:text-white/80 transition-colors" />
                  </a>

                  {/* Address – not clickable */}
                  <div className="flex items-center gap-4 p-4 border border-white/10 rounded-xl">
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="size-5 text-white/70" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">Adresse</p>
                      <p className="text-white/90 font-medium">{contact.address}</p>
                    </div>
                  </div>
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
