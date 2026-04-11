import { ArrowRight, Shield, Smartphone, UserCheck, TrendingUp, FileText, Home as HomeIcon, Star, Users, CheckCircle2, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import heroImage from 'figma:asset/6467f72be9776f7498d29ca7ab24b5ffe88f5d6b.png';
import advisorImage from 'figma:asset/10d054954305be252875738da7bd914256623f57.png';
import cityImage from 'figma:asset/1cc39275293273730f15b274934f46b4fd3d67b5.png';
import vanguardLogo from 'figma:asset/a0cfb5480a54be7a9f7452eac3a16898bd7572e2.png';
import tobiasLogo from 'figma:asset/d18c50154c596faed8cf176dd2515343f2bfcc34.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollToContact = () => {
    onNavigate('contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const usps = [
    {
      icon: Shield,
      title: 'Unabhängigkeit',
      description: 'Als inhabergeführte Makleragentur erhältst du eine Beratung, die auf deine Bedürfnisse abgestimmt ist. Wir sind ausschließlich dir als Mandanten verpflichtet und präsentieren dir transparent die bestmöglichen Lösungen am Markt.'
    },
    {
      icon: Smartphone,
      title: 'Digitalisierung',
      description: 'Du bist Papier, lange Prozesszeiten und einen verstaubten Versicherungsordner gewohnt? Bei uns läuft alles digital, schnell und unkompliziert. Deine Versicherungen und deine Geldanlage hast du über unsere App immer & überall dabei.'
    },
    {
      icon: UserCheck,
      title: 'Individualität',
      description: 'Du bist einzigartig und verdienst daher auch eine individuelle Beratung. Daher liegt es uns am Herzen, deine Situation zunächst vollständig zu verstehen und dir anschließend maßgeschneiderte Lösungen anzubieten.'
    }
  ];

  const services = [
    {
      icon: Shield,
      title: 'Versicherungen',
      description: 'Gemeinsam führen wir einen Marktvergleich durch, der spezifisch auf deine Bedürfnisse ausgerichtet ist. Unser Fokus liegt dabei auf einem optimalen Preis-Leistungs-Verhältnis.',
      highlights: ['Private Altersvorsorge', 'Einkommensvorsorge', 'Krankenversicherung', 'Gewerbliche Absicherungen'],
      link: 'privatkunden',
      image: 'https://images.unsplash.com/photo-1758518727613-00192aed759b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmaW5hbmNlJTIwY29uc3VsdGF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NjkyOTEwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: TrendingUp,
      title: 'Vermögensaufbau',
      description: 'Gemeinsam finden wir den idealen Weg, der genau auf deine Bedürfnisse abgestimmt ist. Wir strukturieren deine individuelle Anlagestrategie nach deinen Zielen.',
      highlights: ['Fonds & ETFs', 'Aktien & Anleihen', 'Immobilien', 'Keine Ausgabeaufschläge'],
      link: 'privatkunden',
      image: 'https://images.unsplash.com/photo-1761587941453-bd1790225d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZ3Jvd3RoJTIwY2hhcnR8ZW58MXx8fHwxNzY5MjczMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: FileText,
      title: 'Finanzen',
      description: 'Wir schaffen einen klaren Überblick über deine finanzielle Situation und gestalten eine realistische Finanzplanung für jede Lebensphase.',
      highlights: ['Kontensystem-Optimierung', 'Wohneigentum-Finanzierung', 'Umschuldungen', 'Strategiegespräche'],
      link: 'privatkunden',
      image: 'https://images.unsplash.com/photo-1750306957820-f778b67c4e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBicmlnaHR8ZW58MXx8fHwxNzY5MjkxMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Schmidt',
      rating: 5,
      text: 'Sehr kompetente und individuelle Beratung. Tobi hat sich viel Zeit genommen und alle meine Fragen beantwortet. Die digitale Verwaltung ist super praktisch!'
    },
    {
      name: 'Sarah Weber',
      rating: 5,
      text: 'Endlich eine Beratung, die wirklich auf meine Bedürfnisse eingeht. Das Team von tobfinance ist immer erreichbar und hilft schnell weiter.'
    },
    {
      name: 'Thomas Müller',
      rating: 5,
      text: 'Die Umstellung auf die digitale App war super einfach. Jetzt habe ich alle Versicherungen immer griffbereit. Absolute Empfehlung!'
    }
  ];

  const makerAdvantages = [
    {
      title: 'Unabhängige Beratung',
      description: 'Im Gegensatz zu einem Vertreter ist ein Makler nicht an bestimmte Versicherungen gebunden. Wir arbeiten ausschließlich in deinem Interesse – ohne versteckte Kosten.'
    },
    {
      title: 'Lebenslange Betreuung',
      description: 'Wir unterstützen dich nicht nur beim Abschluss, sondern langfristig. Bei Änderungen, in Schadensfällen und mit regelmäßigen Bedarfsanalysen.'
    },
    {
      title: 'Kostenfreie Dienstleistung',
      description: 'Für dich entstehen keine zusätzlichen Kosten. Die Produkte kosten beim Makler genauso viel wie direkt beim Versicherer. Unsere Dienste sind für dich kostenfrei.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Image */}
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
              Deine finanzielle Zukunft in den besten Händen
            </h1>
            <p className="text-lg md:text-xl text-[#2c4f7c] mb-8 leading-relaxed max-w-xl">
              Versicherungen und Finanzen, die zu dir passen – individuell, transparent und mit echtem Mehrwert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-all font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Kostenlose Beratung vereinbaren
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg"
              >
                Mehr ber uns erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Two Column */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
            {/* Left Column - Large Statement */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] leading-tight">
                Ein unabhängiger und kompetenter Makler mit 5 Jahren Erfahrung
              </h2>
            </div>

            {/* Right Column - Description */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tobias kümmert sich um alle Anliegen im Bereich Finanzen und Versicherungen. Durch seine jahrelange Erfahrung und sein großes Netzwerk kann er auch weitere Kompetenzen übernehmen. Seine Kunden sind sehr zufrieden mit der persönlichen und professionellen Betreuung, die sie erhalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Advisor Section */}
      <section className="py-16 md:py-24 bg-[#1e3a5f]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Left Column - Text */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Vertrauensvoller Berater. Ergebnisorientiert. Beziehungen zuerst.
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                Frag jeden, der mit Tobias zusammengearbeitet hat, und er wird dir sagen, dass der Aufbau von Beziehungen seine Superkraft ist. Bekannt dafür, authentische Beziehungen zu pflegen, die auf echter Verbindung beruhen, ist es keine Überraschung, dass der Löwenanteil seines Geschäfts auf Stammkunden und Empfehlungen aufgebaut ist.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Das ist typisch Tobias. Er hat sich einen Namen als äußerst optimistischer Versicherungsmakler gemacht, der vor Positivität nur so sprüht – das menschliche Äquivalent eines Ausrufezeichens.
              </p>
            </div>

            {/* Right Column - Image */}
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

      {/* Customer Testimonial Section with City Background */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={cityImage}
            alt="Hamburg Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Testimonial Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="mb-8">
                <svg className="w-16 h-16 text-white/80 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                "Tobias hat mir geholfen, endlich den Überblick über meine Finanzen zu bekommen. Seine ehrliche und transparente Beratung hat meine Erwartungen bei Weitem übertroffen. Ich fühle mich jetzt bestens abgesichert und für die Zukunft gewappnet!"
              </blockquote>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <cite className="text-lg text-white/90 not-italic">
                — Michael K., Privatkunde seit 2022
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-center text-[#1e3a5f] mb-6">
              Meine Partner
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
              <div className="w-full max-w-[200px]">
                <img 
                  src={vanguardLogo}
                  alt="Vanguard"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full max-w-[200px]">
                <img 
                  src={tobiasLogo}
                  alt="Tobias Rübner Versicherungsmakler"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full max-w-[200px]">
                <img 
                  src={vanguardLogo}
                  alt="Vanguard"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-[#1e3a5f]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Meine Leistungen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 - Versicherungsberatung */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1774300785145-d5e0feb3c1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBjb25zdWx0YXRpb24lMjBhZHZpc29yfGVufDF8fHx8MTc3NDYwODU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Versicherungsberatung"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Versicherungsberatung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Umfassende Analyse deiner Versicherungssituation mit individuellen Empfehlungen. Gemeinsam finden wir die beste Absicherung für dich und deine Familie zu fairen Konditionen.
                  </p>
                </div>
              </div>

              {/* Service 2 - Vermögensaufbau */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1768207450151-30c0bf8e8091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWFsdGglMjBpbnZlc3RtZW50JTIwZ3Jvd3RofGVufDF8fHx8MTc3NDYwODU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Vermögensaufbau"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Vermögensaufbau</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Strategische Geldanlage mit ETFs, Fonds und Aktien nach deinen Zielen. Langfristiger Vermögensaufbau ohne versteckte Kosten und mit vollständiger Transparenz für deine finanzielle Freiheit.
                  </p>
                </div>
              </div>

              {/* Service 3 - Altersvorsorge */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1707999494558-14354a63f6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBmdXR1cmV8ZW58MXx8fHwxNzc0NjA2MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Altersvorsorge"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Altersvorsorge</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sichere dir deinen Lebensstandard im Ruhestand mit maßgeschneiderter Vorsorgeplanung. Von Riester bis Rürup - wir finden die optimale Lösung für deine Rentenlücke und steuerliche Vorteile.
                  </p>
                </div>
              </div>

              {/* Service 4 - Gewerbeversicherungen */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGluc3VyYW5jZSUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzc0NjA4NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Gewerbeversicherungen"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Gewerbeversicherungen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Professioneller Schutz für dein Unternehmen und deine Mitarbeiter. Von Betriebshaftpflicht über D&O bis Cyber-Versicherung - wir sichern dein Business gegen alle Risiken ab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
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
                  Google Bewertungen
                </h2>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-800">5.0</span>
              </div>
              <p className="text-gray-600 text-lg">Basierend auf 47 Bewertungen</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Lisa Hoffmann',
                  date: 'vor 2 Wochen',
                  text: 'Absolut professionelle und herzliche Beratung! Tobias nimmt sich wirklich Zeit und erklärt alles verständlich. Die digitale Verwaltung über die App ist super praktisch.',
                  rating: 5
                },
                {
                  name: 'Jan Schneider',
                  date: 'vor 1 Monat',
                  text: 'Beste Entscheidung, zu tobfinance zu wechseln. Endlich habe ich einen Überblick über all meine Versicherungen und spare dabei auch noch Geld. Top Service!',
                  rating: 5
                },
                {
                  name: 'Nina Becker',
                  date: 'vor 3 Wochen',
                  text: 'Sehr kompetent und immer erreichbar. Das Team beantwortet alle Fragen schnell und unkompliziert. Ich fühle mich rundum gut betreut.',
                  rating: 5
                }
              ].map((review, index) => (
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
      <section className="py-16 md:py-24 bg-[#1e3a5f]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Bereit für deine finanzielle Zukunft?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Vereinbare jetzt ein kostenloses Erstgespräch und lass uns gemeinsam die beste Lösung für dich finden.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-8 py-4 bg-white text-[#1e3a5f] rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg shadow-lg"
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