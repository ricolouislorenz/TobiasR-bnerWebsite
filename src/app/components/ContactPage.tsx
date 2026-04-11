import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    toast.success('Vielen Dank für deine Nachricht! Wir melden uns in Kürze bei dir.');
    setSubmitSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F5F0EB] via-white to-[#E8DDD6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-6">
              Lass uns gemeinsam deine finanzielle Zukunft gestalten
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Vereinbare jetzt dein kostenloses Beratungsgespräch – unverbindlich und persönlich.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#4A3728] mb-6">
                Kontaktiere uns
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Wir freuen uns darauf, von dir zu hören. Fülle einfach das Formular aus oder kontaktiere uns direkt.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B7355]/10 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="size-6 text-[#8B7355]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4A3728] mb-1">Telefon</h3>
                    <p className="text-gray-600">+49 (0) 123 456789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#E8DDD6] rounded-lg mr-4 flex-shrink-0">
                    <Mail className="size-6 text-[#4A3728]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4A3728] mb-1">E-Mail</h3>
                    <p className="text-gray-600">info@tobfinance.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#8B7355]/10 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="size-6 text-[#8B7355]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4A3728] mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Musterstraße 123<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#E8DDD6] rounded-lg mr-4 flex-shrink-0">
                    <Clock className="size-6 text-[#4A3728]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4A3728] mb-1">Öffnungszeiten</h3>
                    <p className="text-gray-600">
                      Mo - Fr: 9:00 - 18:00 Uhr<br />
                      Sa: Nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#F5F0EB] to-white p-8 rounded-xl shadow-lg border border-[#8B7355]/20">
              <h3 className="text-2xl font-bold text-[#4A3728] mb-6">
                Nachricht senden
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#8B7355]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent outline-none transition-all"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#8B7355]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent outline-none transition-all"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#8B7355]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent outline-none transition-all"
                    placeholder="Deine Telefonnummer"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#8B7355]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent outline-none transition-all"
                    placeholder="Worum geht es?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-[#8B7355]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Deine Nachricht an uns..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#4A3728] text-white rounded-lg hover:bg-[#5D4837] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                  {!isSubmitting && <Send className="ml-2 size-5" />}
                </button>
              </form>

              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    ✓ Vielen Dank für deine Nachricht! Wir melden uns schnellstmöglich bei dir.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8B7355] to-[#7A6A5D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-lg md:text-xl text-[#F5F0EB] mb-8 leading-relaxed">
              Vereinbare jetzt dein kostenloses Erstgespräch und starte in eine sichere finanzielle Zukunft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491234567890"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4A3728] rounded-lg hover:bg-[#F5F0EB] transition-colors font-medium text-lg shadow-lg"
              >
                <Phone className="mr-2 size-5" />
                Jetzt anrufen
              </a>
              <a
                href="mailto:info@tobfinance.de"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
              >
                <Mail className="mr-2 size-5" />
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}