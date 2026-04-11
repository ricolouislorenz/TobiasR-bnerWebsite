import { useState } from 'react';
import { ArrowRight, Star, User, Settings } from 'lucide-react';
import { Toaster } from '@/app/components/ui/sonner';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServiceWheel } from '@/app/components/ServiceWheel';
import { ContentProvider, useContent } from '@/app/context/ContentContext';
import { AdminPanel } from '@/app/components/AdminPanel';
import heroImage from 'figma:asset/6467f72be9776f7498d29ca7ab24b5ffe88f5d6b.png';
import advisorImage from 'figma:asset/10d054954305be252875738da7bd914256623f57.png';
import cityImage from 'figma:asset/1cc39275293273730f15b274934f46b4fd3d67b5.png';

function AppContent() {
  const { content } = useContent();
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: 'Tobias Rübner',
      role: 'Gründer & Inhaber',
      description: 'Moin, ich bin Tobi - Gründer und Inhaber von tobfinance. Ich bin davon überzeugt, dass jeder Mensch eine maximal unabhängige und individuelle Beratung verdient hat. Diese Vision als Makler verfolgen zu können, treibt mich jeden Tag mit großer Leidenschaft an.'
    },
    {
      name: 'Anica Ohl',
      role: 'Chief Operating Officer',
      description: 'Hallo, ich bin Anica und verantworte bei tobfinance alle operativen Tätigkeiten. Mir ist es wichtig, dass unsere Kunden und Kundinnen zu 100% zufrieden und vollumfänglich betreut werden.'
    },
    {
      name: 'Laura Fritschen',
      role: 'Consultant',
      description: 'Moin, ich bin Laura und bin als Consultant mit voller Begeisterung Teil unseres Teams. Ich bin überzeugt: Wer Unternehmen wirklich verstehen will, muss genau zuhören, querdenken und mit Mut neue Wege gehen.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-bold text-xl text-[#1e3a5f]">tobfinance</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('leistungen')} className="text-gray-700 hover:text-[#1e3a5f] font-medium transition-colors">
                Leistungen
              </button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-[#1e3a5f] font-medium transition-colors">
                Über uns
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="px-6 py-2 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-colors font-medium">
                Kontakt
              </button>
              <button
                onClick={() => setShowAdminPanel(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Admin Panel öffnen"
              >
                <Settings className="size-5 text-gray-600" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] overflow-hidden">
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
                {content.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-[#2c4f7c] mb-8 leading-relaxed max-w-xl">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-all font-medium text-lg shadow-lg hover:shadow-xl"
                >
                  {content.hero.ctaPrimary}
                </button>
                <button
                  onClick={() => scrollToSection('team')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg"
                >
                  {content.hero.ctaSecondary}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] leading-tight">
                  {content.about.title}
                </h2>
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {content.about.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Advisor Section */}
        <section className="py-16 md:py-24 bg-[#1e3a5f]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {content.advisor.title}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  {content.advisor.paragraph1}
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  {content.advisor.paragraph2}
                </p>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src={advisorImage}
                  alt="Tobias Rübner - Ihr Versicherungsmakler"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonial */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={cityImage}
              alt="Hamburg Skyline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="mb-8">
                  <svg className="w-16 h-16 text-white/80 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                  "{content.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <cite className="text-lg text-white/90 not-italic">
                  — {content.testimonial.author}
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* Service Wheel */}
        <div id="leistungen">
          <ServiceWheel />
        </div>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-gradient-to-br from-[#F5F0EB] via-white to-[#E8DDD6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-4">
                {content.team.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {content.team.subtitle}
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

        {/* Google Reviews */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <svg className="w-10 h-10" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">
                    {content.googleReviews.title}
                  </h2>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-gray-800">{content.googleReviews.score.toFixed(1)}</span>
                </div>
                <p className="text-gray-600 text-lg">Basierend auf {content.googleReviews.totalReviews} Bewertungen</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {content.googleReviews.reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-semibold">
                        {review.name.split(' ').map(n => n[0]).join('')}
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

        {/* CTA Section */}
        <section id="kontakt" className="py-16 md:py-24 bg-[#1e3a5f]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {content.contact.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {content.contact.subtitle}
              </p>

              {/* Contact Options */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-white mb-2">Telefon</h3>
                  <a href={`tel:${content.contact.phone}`} className="text-white/90 hover:text-white">
                    {content.contact.phone}
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-white mb-2">E-Mail</h3>
                  <a href={`mailto:${content.contact.email}`} className="text-white/90 hover:text-white">
                    {content.contact.email}
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-bold text-white mb-2">Adresse</h3>
                  <p className="text-white/90">
                    {content.contact.address}
                  </p>
                </div>
              </div>

              <button
                onClick={() => window.open('https://calendly.com/tobfinance', '_blank')}
                className="inline-flex items-center px-8 py-4 bg-white text-[#1e3a5f] rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg shadow-lg"
              >
                {content.contact.ctaText}
                <ArrowRight className="ml-2 size-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              <p className="mb-2">{content.footer.copyright}</p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <a href="#" className="hover:text-[#1e3a5f]">Impressum</a>
                <a href="#" className="hover:text-[#1e3a5f]">Datenschutz</a>
                <a href="#" className="hover:text-[#1e3a5f]">AGB</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {showAdminPanel && <AdminPanel onClose={() => setShowAdminPanel(false)} />}

      <Toaster position="top-right" />
    </div>
  );
}

// One-page application for tobfinance
export default function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}
