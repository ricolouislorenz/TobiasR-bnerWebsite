import { useState } from 'react';
import { useContent } from '@/app/context/ContentContext';
import { X, Save, RotateCcw, Edit, Star } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

export function AdminPanel({ onClose }: AdminPanelProps) {
  const { content, updateContent, resetContent } = useContent();
  const [editedContent, setEditedContent] = useState(content);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleSave = () => {
    updateContent(editedContent);
    alert('Änderungen gespeichert!');
  };

  const handleReset = () => {
    if (confirm('Möchtest du wirklich alle Änderungen zurücksetzen?')) {
      resetContent();
      setEditedContent(content);
    }
  };

  const updateField = (section: string, field: string, value: any) => {
    setEditedContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const updateReview = (index: number, field: string, value: any) => {
    const newReviews = [...editedContent.googleReviews.reviews];
    newReviews[index] = { ...newReviews[index], [field]: value };
    setEditedContent(prev => ({
      ...prev,
      googleReviews: {
        ...prev.googleReviews,
        reviews: newReviews
      }
    }));
  };

  const sections = [
    { id: 'hero', label: 'Hero-Bereich' },
    { id: 'about', label: 'Über uns' },
    { id: 'advisor', label: 'Berater-Sektion' },
    { id: 'testimonial', label: 'Testimonial' },
    { id: 'team', label: 'Team' },
    { id: 'googleReviews', label: 'Google Bewertungen' },
    { id: 'contact', label: 'Kontakt' },
    { id: 'footer', label: 'Footer' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#1e3a5f] rounded-lg">
              <Edit className="size-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
              <p className="text-sm text-gray-600">Bearbeite alle Inhalte der Website</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="size-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-200 p-4 overflow-y-auto">
            <h3 className="font-bold text-gray-700 mb-3">Bereiche</h3>
            <div className="space-y-1">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-[#1e3a5f] text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editor */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeSection === 'hero' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hero-Bereich</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Haupttitel</label>
                  <input
                    type="text"
                    value={editedContent.hero.title}
                    onChange={(e) => updateField('hero', 'title', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Untertitel</label>
                  <textarea
                    value={editedContent.hero.subtitle}
                    onChange={(e) => updateField('hero', 'subtitle', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primärer CTA Button</label>
                  <input
                    type="text"
                    value={editedContent.hero.ctaPrimary}
                    onChange={(e) => updateField('hero', 'ctaPrimary', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sekundärer CTA Button</label>
                  <input
                    type="text"
                    value={editedContent.hero.ctaSecondary}
                    onChange={(e) => updateField('hero', 'ctaSecondary', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {activeSection === 'about' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Über uns</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titel</label>
                  <textarea
                    value={editedContent.about.title}
                    onChange={(e) => updateField('about', 'title', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Beschreibung</label>
                  <textarea
                    value={editedContent.about.description}
                    onChange={(e) => updateField('about', 'description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {activeSection === 'advisor' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Berater-Sektion</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titel</label>
                  <input
                    type="text"
                    value={editedContent.advisor.title}
                    onChange={(e) => updateField('advisor', 'title', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Absatz 1</label>
                  <textarea
                    value={editedContent.advisor.paragraph1}
                    onChange={(e) => updateField('advisor', 'paragraph1', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Absatz 2</label>
                  <textarea
                    value={editedContent.advisor.paragraph2}
                    onChange={(e) => updateField('advisor', 'paragraph2', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {activeSection === 'testimonial' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Testimonial</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zitat</label>
                  <textarea
                    value={editedContent.testimonial.quote}
                    onChange={(e) => updateField('testimonial', 'quote', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Autor</label>
                  <input
                    type="text"
                    value={editedContent.testimonial.author}
                    onChange={(e) => updateField('testimonial', 'author', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {activeSection === 'team' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Team-Sektion</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titel</label>
                  <input
                    type="text"
                    value={editedContent.team.title}
                    onChange={(e) => updateField('team', 'title', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Untertitel</label>
                  <textarea
                    value={editedContent.team.subtitle}
                    onChange={(e) => updateField('team', 'subtitle', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {activeSection === 'googleReviews' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Google Bewertungen</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titel</label>
                    <input
                      type="text"
                      value={editedContent.googleReviews.title}
                      onChange={(e) => updateField('googleReviews', 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Durchschnittsbewertung</label>
                    <input
                      type="number"
                      min="0"
                      max="5"
                      step="0.1"
                      value={editedContent.googleReviews.score}
                      onChange={(e) => updateField('googleReviews', 'score', parseFloat(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Anzahl Bewertungen</label>
                    <input
                      type="number"
                      value={editedContent.googleReviews.totalReviews}
                      onChange={(e) => updateField('googleReviews', 'totalReviews', parseInt(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-6 mt-6">
                  <h4 className="font-bold text-gray-800">Bewertungen (3 Stück)</h4>
                  {editedContent.googleReviews.reviews.map((review, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-gray-900">Bewertung {index + 1}</h5>
                        <div className="flex items-center gap-2">
                          <Star className="size-4 fill-yellow-400 text-yellow-400" />
                          <input
                            type="number"
                            min="1"
                            max="5"
                            value={review.rating}
                            onChange={(e) => updateReview(index, 'rating', parseInt(e.target.value))}
                            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                          <input
                            type="text"
                            value={review.name}
                            onChange={(e) => updateReview(index, 'name', e.target.value)}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">Datum</label>
                          <input
                            type="text"
                            value={review.date}
                            onChange={(e) => updateReview(index, 'date', e.target.value)}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Bewertungstext</label>
                        <textarea
                          value={review.text}
                          onChange={(e) => updateReview(index, 'text', e.target.value)}
                          rows={3}
                          className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kontakt-Sektion</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titel</label>
                  <input
                    type="text"
                    value={editedContent.contact.title}
                    onChange={(e) => updateField('contact', 'title', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Untertitel</label>
                  <textarea
                    value={editedContent.contact.subtitle}
                    onChange={(e) => updateField('contact', 'subtitle', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input
                    type="text"
                    value={editedContent.contact.phone}
                    onChange={(e) => updateField('contact', 'phone', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                  <input
                    type="email"
                    value={editedContent.contact.email}
                    onChange={(e) => updateField('contact', 'email', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                  <input
                    type="text"
                    value={editedContent.contact.address}
                    onChange={(e) => updateField('contact', 'address', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
                  <input
                    type="text"
                    value={editedContent.contact.ctaText}
                    onChange={(e) => updateField('contact', 'ctaText', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {activeSection === 'footer' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Footer</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Copyright Text</label>
                  <input
                    type="text"
                    value={editedContent.footer.copyright}
                    onChange={(e) => updateField('footer', 'copyright', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors border border-gray-300"
          >
            <RotateCcw className="size-4" />
            Zurücksetzen
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Abbrechen
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2c4f7c] transition-colors"
            >
              <Save className="size-4" />
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
