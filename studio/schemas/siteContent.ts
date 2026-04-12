import { defineType, defineField, defineArrayMember } from 'sanity';

// ─── Reusable field groups ────────────────────────────────────────────────────

const service = defineArrayMember({
  type: 'object',
  name: 'service',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Titel', validation: (R) => R.required() }),
    defineField({ name: 'shortTitle', type: 'string', title: 'Kurztitel (im Rad, optional)' }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Bullet Points',
      of: [{ type: 'string' }],
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Beschreibung (ca. 4 Sätze)',
      rows: 5,
      validation: (R) => R.required(),
    }),
  ],
  preview: { select: { title: 'title' } },
});

const teamMember = defineArrayMember({
  type: 'object',
  name: 'teamMember',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: (R) => R.required() }),
    defineField({ name: 'role', type: 'string', title: 'Position / Rolle', validation: (R) => R.required() }),
    defineField({ name: 'description', type: 'text', title: 'Kurzbeschreibung', rows: 4, validation: (R) => R.required() }),
  ],
  preview: { select: { title: 'name', subtitle: 'role' } },
});

const reviewItem = defineArrayMember({
  type: 'object',
  name: 'reviewItem',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name des Rezensenten', validation: (R) => R.required() }),
    defineField({ name: 'date', type: 'string', title: 'Datum (z. B. "vor 2 Wochen")', validation: (R) => R.required() }),
    defineField({ name: 'text', type: 'text', title: 'Bewertungstext', rows: 4, validation: (R) => R.required() }),
    defineField({ name: 'rating', type: 'number', title: 'Sterne (1–5)', validation: (R) => R.required().min(1).max(5) }),
  ],
  preview: { select: { title: 'name', subtitle: 'date' } },
});

// ─── Main document ────────────────────────────────────────────────────────────

export const siteContent = defineType({
  name: 'siteContent',
  title: 'Website-Inhalte',
  type: 'document',
  groups: [
    { name: 'hero',             title: 'Hero' },
    { name: 'about',            title: 'Über uns' },
    { name: 'advisor',          title: 'Berater' },
    { name: 'testimonial',      title: 'Testimonial' },
    { name: 'team',             title: 'Team' },
    { name: 'reviews',          title: 'Bewertungen' },
    { name: 'contact',          title: 'Kontakt' },
    { name: 'privateServices',  title: 'Leistungen – Privat' },
    { name: 'businessServices', title: 'Leistungen – Gewerbe' },
  ],
  fields: [

    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero-Sektion',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'title',        type: 'string', title: 'Hauptüberschrift' }),
        defineField({ name: 'subtitle',     type: 'text',   title: 'Untertitel', rows: 2 }),
        defineField({ name: 'ctaPrimary',   type: 'string', title: 'Button 1 – Text' }),
        defineField({ name: 'ctaSecondary', type: 'string', title: 'Button 2 – Text' }),
      ],
    }),

    // ── About ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'about',
      title: 'Über-uns-Sektion',
      type: 'object',
      group: 'about',
      fields: [
        defineField({ name: 'title',       type: 'string', title: 'Überschrift' }),
        defineField({ name: 'description', type: 'text',   title: 'Beschreibungstext', rows: 4 }),
      ],
    }),

    // ── Advisor ───────────────────────────────────────────────────────────────
    defineField({
      name: 'advisor',
      title: 'Berater-Sektion',
      type: 'object',
      group: 'advisor',
      fields: [
        defineField({ name: 'title',      type: 'string', title: 'Überschrift' }),
        defineField({ name: 'paragraph1', type: 'text',   title: 'Absatz 1', rows: 4 }),
        defineField({ name: 'paragraph2', type: 'text',   title: 'Absatz 2', rows: 4 }),
      ],
    }),

    // ── Testimonial ───────────────────────────────────────────────────────────
    defineField({
      name: 'testimonial',
      title: 'Zitat-Sektion',
      type: 'object',
      group: 'testimonial',
      fields: [
        defineField({ name: 'quote',  type: 'text',   title: 'Zitat (ohne Anführungszeichen)', rows: 4 }),
        defineField({ name: 'author', type: 'string', title: 'Autor (z. B. "Michael K., Privatkunde seit 2022")' }),
      ],
    }),

    // ── Team ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'team',
      title: 'Team-Sektion',
      type: 'object',
      group: 'team',
      fields: [
        defineField({ name: 'sectionTitle',    type: 'string', title: 'Abschnittstitel' }),
        defineField({ name: 'sectionSubtitle', type: 'string', title: 'Untertitel' }),
        defineField({
          name: 'members',
          title: 'Teammitglieder',
          type: 'array',
          of: [teamMember],
        }),
      ],
    }),

    // ── Reviews ───────────────────────────────────────────────────────────────
    defineField({
      name: 'reviews',
      title: 'Bewertungen',
      type: 'object',
      group: 'reviews',
      fields: [
        defineField({ name: 'sectionTitle',  type: 'string', title: 'Abschnittstitel' }),
        defineField({ name: 'score',         type: 'number', title: 'Durchschnittswertung' }),
        defineField({ name: 'totalReviews',  type: 'number', title: 'Anzahl Bewertungen' }),
        defineField({ name: 'items', title: 'Einzelbewertungen', type: 'array', of: [reviewItem] }),
      ],
    }),

    // ── Contact ───────────────────────────────────────────────────────────────
    defineField({
      name: 'contact',
      title: 'Kontakt-Sektion',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'title',          type: 'string', title: 'Überschrift' }),
        defineField({ name: 'subtitle',        type: 'text',   title: 'Untertitel', rows: 2 }),
        defineField({ name: 'ctaTitle',        type: 'string', title: 'CTA-Box Titel' }),
        defineField({ name: 'ctaDescription',  type: 'text',   title: 'CTA-Box Beschreibung', rows: 3 }),
        defineField({ name: 'ctaButtonText',   type: 'string', title: 'CTA-Button Text' }),
        defineField({ name: 'contactTitle',    type: 'string', title: 'Kontaktbox Titel' }),
        defineField({ name: 'phone',           type: 'string', title: 'Telefonnummer (Anzeige)' }),
        defineField({ name: 'email',           type: 'string', title: 'E-Mail-Adresse' }),
        defineField({ name: 'address',         type: 'string', title: 'Adresse' }),
        defineField({ name: 'whatsappNumber',  type: 'string', title: 'WhatsApp-Nummer (nur Ziffern, z. B. 4940123456789)' }),
        defineField({ name: 'calendlyUrl',     type: 'url',    title: 'Calendly-Link' }),
      ],
    }),

    // ── Private Services ──────────────────────────────────────────────────────
    defineField({
      name: 'privateServices',
      title: 'Leistungen – Privatkunden',
      type: 'array',
      group: 'privateServices',
      of: [service],
    }),

    // ── Business Services ─────────────────────────────────────────────────────
    defineField({
      name: 'businessServices',
      title: 'Leistungen – Gewerbekunden',
      type: 'array',
      group: 'businessServices',
      of: [service],
    }),
  ],

  preview: {
    prepare: () => ({ title: 'Website-Inhalte' }),
  },
});
