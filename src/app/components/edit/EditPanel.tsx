import { useState } from 'react';
import { X, Save, Check, ChevronDown, ChevronRight, Plus, Trash2, Loader2, AlertTriangle } from 'lucide-react';
import { useContent, SiteContent } from '@/app/context/ContentContext';

const hasWriteToken = !!import.meta.env.VITE_SANITY_WRITE_TOKEN;

// ─── Deep helpers ─────────────────────────────────────────────────────────────

function getIn(obj: unknown, path: (string | number)[]): unknown {
  return path.reduce((acc, key) => {
    if (acc == null) return '';
    return (acc as Record<string | number, unknown>)[key];
  }, obj);
}

function setIn(obj: unknown, path: (string | number)[], value: unknown): unknown {
  if (path.length === 0) return value;
  const [head, ...tail] = path;
  if (Array.isArray(obj)) {
    const arr = [...obj];
    arr[head as number] = setIn(arr[head as number], tail, value);
    return arr;
  }
  const rec = { ...(obj as object) } as Record<string | number, unknown>;
  rec[head] = setIn(rec[head], tail, value);
  return rec;
}

// ─── Section list ─────────────────────────────────────────────────────────────

const SECTIONS = [
  { key: 'hero',       label: 'Hero' },
  { key: 'about',      label: 'Über uns' },
  { key: 'advisor',    label: 'Berater' },
  { key: 'testimonial',label: 'Testimonial' },
  { key: 'reviews',    label: 'Bewertungen' },
  { key: 'contact',    label: 'Kontakt' },
  { key: 'private',    label: 'Leistungen – Privat' },
  { key: 'business',   label: 'Leistungen – Gewerbe' },
] as const;

type SectionKey = typeof SECTIONS[number]['key'];

// ─── Props ────────────────────────────────────────────────────────────────────

interface EditPanelProps {
  onClose: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function EditPanel({ onClose }: EditPanelProps) {
  const { content, updateContent, saveContent } = useContent();
  const [draft, setDraft] = useState<SiteContent>(() => JSON.parse(JSON.stringify(content)));
  const [section, setSection] = useState<SectionKey>('hero');
  const [saving, setSaving] = useState(false);
  const [saveResult, setSaveResult] = useState<{ ok: boolean; msg: string } | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // ── Field updater ────────────────────────────────────────────────────────────

  const set = (path: (string | number)[], value: unknown) => {
    setDraft((d) => setIn(d, path, value) as SiteContent);
  };

  // ── Generic input (helper – not a React component, avoids remount/focus issues) ─

  const input = (
    label: string,
    path: (string | number)[],
    multiline = false,
    rows = 3,
  ) => {
    const val = (getIn(draft, path) as string) ?? '';
    const cls = 'w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#1e3a5f] transition-colors';
    return (
      <div key={path.join('.')} className="mb-4">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
          {label}
        </label>
        {multiline ? (
          <textarea
            value={val}
            onChange={(e) => set(path, e.target.value)}
            rows={rows}
            className={`${cls} resize-y leading-relaxed`}
          />
        ) : (
          <input
            type="text"
            value={val}
            onChange={(e) => set(path, e.target.value)}
            className={cls}
          />
        )}
      </div>
    );
  };

  const numInput = (label: string, path: (string | number)[]) => {
    const val = (getIn(draft, path) as number) ?? 0;
    return (
      <div key={path.join('.')} className="mb-4">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
          {label}
        </label>
        <input
          type="number"
          value={val}
          onChange={(e) => set(path, Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#1e3a5f] transition-colors"
        />
      </div>
    );
  };

  // ── Features list for a service ───────────────────────────────────────────────

  const featureList = (basePath: (string | number)[]) => {
    const features = (getIn(draft, basePath) as string[]) ?? [];
    return (
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
          Bullet Points
        </label>
        <div className="space-y-2">
          {features.map((f, fi) => (
            <div key={fi} className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
              <input
                type="text"
                value={f}
                onChange={(e) => set([...basePath, fi], e.target.value)}
                className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#1e3a5f]"
              />
              <button
                onClick={() => set(basePath, features.filter((_, j) => j !== fi))}
                className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="size-3.5" />
              </button>
            </div>
          ))}
          <button
            onClick={() => set(basePath, [...features, ''])}
            className="flex items-center gap-1.5 text-xs text-[#1e3a5f] hover:text-[#2c4f7c] transition-colors mt-1"
          >
            <Plus className="size-3.5" /> Bullet Point hinzufügen
          </button>
        </div>
      </div>
    );
  };

  // ── Accordion item for a review ───────────────────────────────────────────────

  const reviewItem = (i: number) => {
    const review = draft.reviews.items[i];
    const key = `review-${i}`;
    const open = !!expanded[key];
    return (
      <div key={i} className="border border-gray-200 rounded-xl overflow-hidden mb-3">
        <button
          onClick={() => setExpanded((ex) => ({ ...ex, [key]: !open }))}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
        >
          <span className="font-medium text-gray-800 text-sm">{review.name || '(kein Name)'}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                set(['reviews', 'items'], draft.reviews.items.filter((_, j) => j !== i));
              }}
              className="p-1 text-red-400 hover:text-red-600 transition-colors"
            >
              <Trash2 className="size-4" />
            </button>
            {open ? <ChevronDown className="size-4 text-gray-500" /> : <ChevronRight className="size-4 text-gray-500" />}
          </div>
        </button>
        {open && (
          <div className="p-4">
            {input('Name', ['reviews', 'items', i, 'name'])}
            {input('Datum (z. B. "vor 2 Wochen")', ['reviews', 'items', i, 'date'])}
            {numInput('Sterne (1–5)', ['reviews', 'items', i, 'rating'])}
            {input('Bewertungstext', ['reviews', 'items', i, 'text'], true, 3)}
          </div>
        )}
      </div>
    );
  };

  // ── Accordion item for a service ──────────────────────────────────────────────

  const serviceItem = (basePath: 'privateServices' | 'businessServices', i: number) => {
    const svc = draft[basePath][i];
    const key = `${basePath}-${i}`;
    const open = !!expanded[key];
    return (
      <div key={i} className="border border-gray-200 rounded-xl overflow-hidden mb-3">
        <button
          onClick={() => setExpanded((ex) => ({ ...ex, [key]: !open }))}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
        >
          <span className="font-medium text-gray-800 text-sm">{svc.title || '(kein Titel)'}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                set([basePath], draft[basePath].filter((_, j) => j !== i));
              }}
              className="p-1 text-red-400 hover:text-red-600 transition-colors"
            >
              <Trash2 className="size-4" />
            </button>
            {open ? <ChevronDown className="size-4 text-gray-500" /> : <ChevronRight className="size-4 text-gray-500" />}
          </div>
        </button>
        {open && (
          <div className="p-4">
            {input('Titel', [basePath, i, 'title'])}
            {input('Kurztitel (optional, für das Rad)', [basePath, i, 'shortTitle'])}
            {featureList([basePath, i, 'features'])}
            {input('Beschreibung (ca. 4 Sätze)', [basePath, i, 'description'], true, 5)}
          </div>
        )}
      </div>
    );
  };

  // ── Save ─────────────────────────────────────────────────────────────────────

  const handleSave = async () => {
    setSaving(true);
    setSaveResult(null);
    const result = await saveContent(draft);
    setSaving(false);
    setSaveResult({ ok: result.success, msg: result.message });
    if (result.success) {
      setTimeout(() => setSaveResult(null), 3000);
    }
  };

  // ── Section content ───────────────────────────────────────────────────────────

  const renderSection = () => {
    switch (section) {
      case 'hero':
        return (
          <>
            {input('Hauptüberschrift', ['hero', 'title'])}
            {input('Untertitel', ['hero', 'subtitle'], true, 2)}
            {input('Button 1 – Text', ['hero', 'ctaPrimary'])}
            {input('Button 2 – Text', ['hero', 'ctaSecondary'])}
          </>
        );

      case 'about':
        return (
          <>
            {input('Überschrift', ['about', 'title'])}
            {input('Beschreibungstext', ['about', 'description'], true, 4)}
          </>
        );

      case 'advisor':
        return (
          <>
            {input('Überschrift', ['advisor', 'title'])}
            {input('Absatz 1', ['advisor', 'paragraph1'], true, 4)}
            {input('Absatz 2', ['advisor', 'paragraph2'], true, 4)}
          </>
        );

      case 'testimonial':
        return (
          <>
            {input('Zitat (ohne Anführungszeichen)', ['testimonial', 'quote'], true, 4)}
            {input('Autor', ['testimonial', 'author'])}
          </>
        );

      case 'reviews':
        return (
          <>
            {input('Abschnittstitel', ['reviews', 'sectionTitle'])}
            {numInput('Durchschnittswertung', ['reviews', 'score'])}
            {numInput('Gesamtanzahl Bewertungen', ['reviews', 'totalReviews'])}
            <div className="my-5 border-t border-gray-100" />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Einzelbewertungen</p>
            {draft.reviews.items.map((_, i) => reviewItem(i))}
            <button
              onClick={() =>
                set(['reviews', 'items'], [
                  ...draft.reviews.items,
                  { name: '', date: '', text: '', rating: 5 },
                ])
              }
              className="flex items-center gap-2 text-sm text-[#1e3a5f] hover:text-[#2c4f7c] transition-colors"
            >
              <Plus className="size-4" /> Bewertung hinzufügen
            </button>
          </>
        );

      case 'contact':
        return (
          <>
            {input('Überschrift', ['contact', 'title'])}
            {input('Untertitel', ['contact', 'subtitle'], true, 2)}
            <div className="my-4 border-t border-gray-100" />
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">CTA-Box (links)</p>
            {input('CTA-Titel', ['contact', 'ctaTitle'])}
            {input('CTA-Beschreibung', ['contact', 'ctaDescription'], true, 3)}
            {input('CTA-Button Text', ['contact', 'ctaButtonText'])}
            {input('Calendly-Link', ['contact', 'calendlyUrl'])}
            <div className="my-4 border-t border-gray-100" />
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Kontaktbox (rechts)</p>
            {input('Kontaktbox-Titel', ['contact', 'contactTitle'])}
            {input('Telefonnummer (Anzeige)', ['contact', 'phone'])}
            {input('E-Mail-Adresse', ['contact', 'email'])}
            {input('Adresse', ['contact', 'address'])}
            {input('WhatsApp-Nummer (nur Ziffern, z. B. 4940123456789)', ['contact', 'whatsappNumber'])}
          </>
        );

      case 'private':
        return (
          <>
            <p className="text-xs text-gray-500 mb-4">
              Reihenfolge entspricht der Darstellung im Rad. Klicke auf eine Leistung zum Bearbeiten.
            </p>
            {draft.privateServices.map((_, i) => serviceItem('privateServices', i))}
            <button
              onClick={() =>
                set(['privateServices'], [
                  ...draft.privateServices,
                  { title: '', shortTitle: '', description: '', features: [] },
                ])
              }
              className="flex items-center gap-2 text-sm text-[#1e3a5f] hover:text-[#2c4f7c] transition-colors mt-2"
            >
              <Plus className="size-4" /> Leistung hinzufügen
            </button>
          </>
        );

      case 'business':
        return (
          <>
            <p className="text-xs text-gray-500 mb-4">
              Reihenfolge entspricht der Darstellung im Rad. Klicke auf eine Leistung zum Bearbeiten.
            </p>
            {draft.businessServices.map((_, i) => serviceItem('businessServices', i))}
            <button
              onClick={() =>
                set(['businessServices'], [
                  ...draft.businessServices,
                  { title: '', shortTitle: '', description: '', features: [] },
                ])
              }
              className="flex items-center gap-2 text-sm text-[#1e3a5f] hover:text-[#2c4f7c] transition-colors mt-2"
            >
              <Plus className="size-4" /> Leistung hinzufügen
            </button>
          </>
        );

      default:
        return null;
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="fixed inset-0 z-[90] flex">
      {/* Backdrop */}
      <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="w-full max-w-2xl bg-white flex flex-col shadow-2xl h-screen">
        {/* No-token warning */}
        {!hasWriteToken && (
          <div className="flex items-start gap-3 bg-amber-50 border-b border-amber-200 px-5 py-3">
            <AlertTriangle className="size-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Kein Schreib-Token konfiguriert.</strong> Speichern ist deaktiviert.
              Bitte <code className="bg-amber-100 px-1 rounded">VITE_SANITY_WRITE_TOKEN</code> in{' '}
              <code className="bg-amber-100 px-1 rounded">.env.local</code> setzen und GitHub Secret
              hinzufügen.
            </p>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
          <div>
            <h2 className="text-lg font-bold text-[#1e3a5f]">Inhalte bearbeiten</h2>
            <p className="text-xs text-gray-400 mt-0.5">Änderungen werden live auf der Seite angezeigt</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Save result message */}
            {saveResult && (
              <span
                className={`text-sm font-medium ${saveResult.ok ? 'text-green-600' : 'text-red-500'}`}
              >
                {saveResult.msg}
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving || !hasWriteToken}
              title={!hasWriteToken ? 'VITE_SANITY_WRITE_TOKEN fehlt' : undefined}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1e3a5f] text-white rounded-xl hover:bg-[#2c4f7c] transition-colors font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {saving ? (
                <Loader2 className="size-4 animate-spin" />
              ) : saveResult?.ok ? (
                <Check className="size-4" />
              ) : (
                <Save className="size-4" />
              )}
              {saving ? 'Speichern…' : 'Speichern'}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
              title="Schließen"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Section nav */}
          <nav className="w-48 flex-shrink-0 border-r border-gray-200 overflow-y-auto py-3">
            {SECTIONS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSection(key)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors rounded-lg mx-1 ${
                  section === key
                    ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Content area */}
          <main className="flex-1 overflow-y-auto p-6">
            {renderSection()}
          </main>
        </div>
      </div>
    </div>
  );
}
