import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { sanityClient } from '@/lib/sanityClient';

const WRITE_TOKEN = import.meta.env.VITE_SANITY_WRITE_TOKEN as string | undefined;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Review {
  name: string;
  date: string;
  text: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface Service {
  title: string;
  shortTitle?: string;
  description: string;
  features: string[];
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
  };
  advisor: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  testimonial: {
    quote: string;
    author: string;
  };
  team: {
    sectionTitle: string;
    sectionSubtitle: string;
    members: TeamMember[];
  };
  reviews: {
    sectionTitle: string;
    score: number;
    totalReviews: number;
    items: Review[];
  };
  contact: {
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
    contactTitle: string;
    phone: string;
    email: string;
    address: string;
    whatsappNumber: string;
    calendlyUrl: string;
  };
  privateServices: Service[];
  businessServices: Service[];
}

// ─── Default content ──────────────────────────────────────────────────────────

export const defaultContent: SiteContent = {
  hero: {
    title: 'Deine finanzielle Zukunft in den besten Händen',
    subtitle: 'Versicherungen und Finanzen, die zu dir passen – individuell, transparent und mit echtem Mehrwert.',
    ctaPrimary: 'Kostenlose Beratung vereinbaren',
    ctaSecondary: 'Mehr über uns erfahren',
  },
  about: {
    title: 'Ein unabhängiger und kompetenter Makler mit 5 Jahren Erfahrung',
    description:
      'Tobias kümmert sich um alle Anliegen im Bereich Finanzen und Versicherungen. Durch seine jahrelange Erfahrung und sein großes Netzwerk kann er auch weitere Kompetenzen übernehmen. Seine Kunden sind sehr zufrieden mit der persönlichen und professionellen Betreuung, die sie erhalten.',
  },
  advisor: {
    title: 'Vertrauensvoller Berater. Ergebnisorientiert. Beziehungen zuerst.',
    paragraph1:
      'Frag jeden, der mit Tobias zusammengearbeitet hat, und er wird dir sagen, dass der Aufbau von Beziehungen seine Superkraft ist. Bekannt dafür, authentische Beziehungen zu pflegen, ist es keine Überraschung, dass der Löwenanteil seines Geschäfts auf Stammkunden und Empfehlungen aufgebaut ist.',
    paragraph2:
      'Er hat sich einen Namen als äußerst optimistischer Versicherungsmakler gemacht, der vor Positivität nur so sprüht – das menschliche Äquivalent eines Ausrufezeichens.',
  },
  testimonial: {
    quote:
      'Tobias hat mir geholfen, endlich den Überblick über meine Finanzen zu bekommen. Seine ehrliche und transparente Beratung hat meine Erwartungen bei Weitem übertroffen. Ich fühle mich jetzt bestens abgesichert und für die Zukunft gewappnet!',
    author: 'Michael K., Privatkunde seit 2022',
  },
  team: {
    sectionTitle: 'Unser Team',
    sectionSubtitle: 'Lerne die Menschen kennen, die sich täglich für deine finanzielle Zukunft einsetzen',
    members: [
      {
        name: 'Tobias Rübner',
        role: 'Gründer & Inhaber',
        description:
          'Moin, ich bin Tobi – Gründer und Inhaber von tobfinance. Ich bin davon überzeugt, dass jeder Mensch eine maximal unabhängige und individuelle Beratung verdient hat. Diese Vision als Makler verfolgen zu können, treibt mich jeden Tag mit großer Leidenschaft an.',
      },
      {
        name: 'Anica Ohl',
        role: 'Chief Operating Officer',
        description:
          'Hallo, ich bin Anica und verantworte bei tobfinance alle operativen Tätigkeiten. Mir ist es wichtig, dass unsere Kunden und Kundinnen zu 100 % zufrieden und vollumfänglich betreut werden.',
      },
      {
        name: 'Laura Fritschen',
        role: 'Consultant',
        description:
          'Moin, ich bin Laura und bin als Consultant mit voller Begeisterung Teil unseres Teams. Ich bin überzeugt: Wer Unternehmen wirklich verstehen will, muss genau zuhören, querdenken und mit Mut neue Wege gehen.',
      },
    ],
  },
  reviews: {
    sectionTitle: 'Google Bewertungen',
    score: 5.0,
    totalReviews: 47,
    items: [
      {
        name: 'Lisa Hoffmann',
        date: 'vor 2 Wochen',
        text: 'Absolut professionelle und herzliche Beratung! Tobias nimmt sich wirklich Zeit und erklärt alles verständlich. Die digitale Verwaltung über die App ist super praktisch.',
        rating: 5,
      },
      {
        name: 'Jan Schneider',
        date: 'vor 1 Monat',
        text: 'Beste Entscheidung, zu tobfinance zu wechseln. Endlich habe ich einen Überblick über all meine Versicherungen und spare dabei auch noch Geld. Top Service!',
        rating: 5,
      },
      {
        name: 'Nina Becker',
        date: 'vor 3 Wochen',
        text: 'Sehr kompetent und immer erreichbar. Das Team beantwortet alle Fragen schnell und unkompliziert. Ich fühle mich rundum gut betreut.',
        rating: 5,
      },
    ],
  },
  contact: {
    title: 'Bereit für deine finanzielle Zukunft?',
    subtitle: 'Vereinbare jetzt ein kostenloses Erstgespräch und lass uns gemeinsam die beste Lösung für dich finden.',
    ctaTitle: 'Kostenloses Erstgespräch',
    ctaDescription:
      'Buche direkt einen Termin in unserem Kalender – unkompliziert, unverbindlich und vollständig kostenlos. Wir freuen uns darauf, dich kennenzulernen.',
    ctaButtonText: 'Termin vereinbaren',
    contactTitle: 'Kontaktiere uns direkt',
    phone: '+49 40 123 456 789',
    email: 'info@tobfinance.de',
    address: 'Hamburg, Deutschland',
    whatsappNumber: '4940123456789',
    calendlyUrl: 'https://calendly.com/tobfinance',
  },
  privateServices: [
    {
      title: 'Investment',
      description:
        'Wir entwickeln eine maßgeschneiderte Anlagestrategie, die exakt auf deine Ziele, deinen Anlagehorizont und deine Risikobereitschaft abgestimmt ist. Dabei setzen wir auf bewährte Instrumente wie ETF-Portfolios und breit diversifizierte Fonds. Keine versteckten Ausgabeaufschläge – du profitierst von vollen Renditen. Gemeinsam behalten wir deine Investments regelmäßig im Blick und passen sie bei Bedarf an deine Lebenssituation an.',
      features: ['ETF-Portfolios', 'Fondssparpläne', 'Vermögensaufbau', 'Keine Ausgabeaufschläge'],
    },
    {
      title: 'Altersvorsorge',
      description:
        'Deine gesetzliche Rente allein wird nicht ausreichen, um deinen Lebensstandard im Alter zu sichern. Wir analysieren deine individuelle Rentenlücke und entwickeln ein passendes Vorsorgekonzept. Von der steuerbegünstigten Rürup-Rente bis zur klassischen privaten Rentenversicherung – wir finden die optimale Lösung für dich. Je früher du startest, desto mehr Kapital baust du durch den Zinseszinseffekt auf.',
      features: ['Riester-Rente', 'Rürup-Rente', 'Private Rentenversicherung', 'Betriebliche Altersvorsorge'],
    },
    {
      title: 'Krankenversicherung',
      shortTitle: 'Kranken- versicherung',
      description:
        'Ob gesetzlich oder privat – wir vergleichen für dich alle relevanten Tarife und finden die Absicherung, die wirklich zu deiner Situation passt. Mit der richtigen Zusatzversicherung schließt du Lücken in der gesetzlichen Versorgung gezielt. Wir begleiten dich langfristig, damit dein Schutz auch bei Lebensveränderungen wie Familiengründung oder Selbstständigkeit optimal bleibt. Dein Gesundheitsschutz ist in sicheren Händen.',
      features: ['Private Krankenversicherung', 'Krankenzusatzversicherung', 'Auslandsreisekrankenversicherung', 'Zahnzusatz'],
    },
    {
      title: 'Private Vorsorge',
      description:
        'Dein größtes Kapital ist deine Arbeitskraft – und genau die gilt es abzusichern. Eine Berufsunfähigkeit kann jeden treffen und führt ohne ausreichenden Schutz schnell zu finanziellen Engpässen. Wir analysieren deinen Bedarf und finden den Tarif, der im Leistungsfall tatsächlich zahlt. Ergänzend prüfen wir, ob Unfall- und Pflegeversicherung für deine individuelle Situation sinnvoll sind.',
      features: ['Berufsunfähigkeitsversicherung', 'Unfallversicherung', 'Pflegeversicherung', 'Risikolebensversicherung'],
    },
    {
      title: 'Sachversicherung',
      description:
        'Von deinem Hausrat über dein Eigenheim bis hin zu deinem Fahrzeug – wir sorgen dafür, dass dein Eigentum rundum geschützt ist. Im Schadenfall stehen wir dir als Makler aktiv zur Seite und übernehmen die Kommunikation mit dem Versicherer. Wir vergleichen Tarife gezielt auf Preis-Leistungs-Verhältnis und schließen Deckungslücken in deinem bestehenden Schutz. So bist du gegen Schäden durch Feuer, Einbruch, Wasser und vieles mehr abgesichert.',
      features: ['Hausratversicherung', 'Wohngebäudeversicherung', 'Kfz-Versicherung', 'Haftpflichtversicherung'],
    },
    {
      title: 'Weitere Versicherungen',
      shortTitle: 'Weitere Versicherungen',
      description:
        'Neben den klassischen Versicherungsbereichen gibt es zahlreiche weitere Absicherungen, die je nach Lebenssituation sinnvoll sein können. Ob Rechtsschutzversicherung für rechtliche Auseinandersetzungen, Tierhalter-Haftpflicht oder eine Reiserücktrittsversicherung – wir kennen den Markt und finden passende Lösungen. Dabei achten wir stets darauf, dass du nicht über- oder unterversichert bist. Transparenz und Individualität stehen bei uns an erster Stelle.',
      features: ['Haftpflichtversicherung', 'Rechtsschutzversicherung', 'Risikolebensversicherung', 'Reiseversicherungen'],
    },
  ],
  businessServices: [
    {
      title: 'Betriebshaftpflicht',
      shortTitle: 'Betriebs- haftpflicht',
      description:
        'Die Betriebshaftpflichtversicherung ist das Fundament jeder gewerblichen Absicherung und schützt dein Unternehmen vor Schadensersatzansprüchen Dritter. Ob Personen-, Sach- oder Vermögensschäden – ein einziger Vorfall kann ohne ausreichenden Schutz existenzbedrohend werden. Wir analysieren dein Geschäftsmodell und sorgen für lückenlosen Schutz zu fairen Konditionen. Als Makler verhandeln wir die besten Bedingungen direkt mit den Versicherern für dich.',
      features: ['Personen- und Sachschäden', 'Vermögensschäden', 'Umweltschäden', 'Produkthaftpflicht'],
    },
    {
      title: 'Firmenrechtsschutz',
      shortTitle: 'Firmen- rechtsschutz',
      description:
        'Rechtliche Streitigkeiten gehören für viele Unternehmen zum Alltag – ob im Arbeits-, Vertrags- oder Steuerrecht. Der Firmenrechtsschutz sorgt dafür, dass du dein Recht durchsetzen kannst, ohne hohe Anwalts- und Gerichtskosten fürchten zu müssen. Wir finden den Tarif, der zu deiner Branche und deinem Risikoprofil passt. So kannst du dich auf dein Kerngeschäft konzentrieren, statt dich mit juristischen Unsicherheiten zu beschäftigen.',
      features: ['Arbeitsrecht', 'Vertragsrecht', 'Steuerrecht', 'Verwaltungsrecht'],
    },
    {
      title: 'Vermögensschadenhaftpflicht',
      shortTitle: 'Vermögens- schaden',
      description:
        'Wer berät, plant oder konzipiert, trägt eine besondere Verantwortung – ein Fehler kann schnell zu erheblichen finanziellen Schäden beim Auftraggeber führen. Die Vermögensschadenhaftpflicht schützt dich und dein Unternehmen vor den finanziellen Folgen solcher Beratungs- und Planungsfehler. Gerade für Berater, Architekten, IT-Dienstleister und ähnliche Berufsgruppen ist dieser Schutz unverzichtbar. Wir finden den passenden Tarif für deine spezifische Tätigkeit.',
      features: ['Beratungsfehler', 'Planungsfehler', 'Vermögensschäden', 'Datenschutzverletzungen'],
    },
    {
      title: 'Directors & Officers',
      shortTitle: 'D & O',
      description:
        'Geschäftsführer, Vorstände und Aufsichtsräte haften im Schadensfall persönlich – und das oft mit dem Privatvermögen. Die D&O-Versicherung schützt leitende Organe vor den finanziellen Folgen von Managementfehlern und Pflichtverletzungen. Ob Gesellschafterstreit, Insolvenz oder Fehlentscheidungen – dieser Schutz ist für jede GmbH und AG essenziell. Wir beraten dich zu den richtigen Deckungssummen und Ausschlüssen für deine spezifische Position.',
      features: ['D&O-Versicherung', 'Managerhaftung', 'Organhaftung', 'Innenhaftung'],
    },
    {
      title: 'Geschäftsinhalt',
      shortTitle: 'Geschäfts- inhalt',
      description:
        'Deine Betriebsausstattung, Maschinen und Waren stellen einen erheblichen Vermögenswert dar – und können durch Feuer, Einbruch, Leitungswasser oder Sturm schnell beschädigt oder zerstört werden. Die Geschäftsinhaltsversicherung deckt diese Risiken ab und sichert die Betriebskontinuität. Wir prüfen, welche Zusatzbausteine wie Elektronikversicherung oder Betriebsunterbrechungsschutz für dein Unternehmen sinnvoll sind. So bist du gegen unerwartete Sachschäden optimal abgesichert.',
      features: ['Inventar & Waren', 'Maschinen & Technik', 'Betriebsunterbrechung', 'Einbruchdiebstahl'],
    },
    {
      title: 'Cyber-Absicherung',
      shortTitle: 'Cyber- Absicherung',
      description:
        'Cyberangriffe und Datenpannen sind längst keine Seltenheit mehr – auch kleinere Unternehmen sind im Visier von Hackern. Die Cyber-Versicherung schützt dich vor den finanziellen Folgen von Datenschutzverletzungen, Ransomware und IT-Ausfällen. Inkludiert sind häufig auch Krisenmanagement, IT-Forensik und Benachrichtigungskosten gegenüber Betroffenen. Wir helfen dir, das Cyberrisiko deines Unternehmens realistisch einzuschätzen und passend abzusichern.',
      features: ['Datenschutzverletzungen', 'Hackerangriffe & Ransomware', 'IT-Betriebsunterbrechung', 'Krisenmanagement'],
    },
    {
      title: 'Transport',
      description:
        'Ob du Waren versendest, empfängst oder als Spediteur tätig bist – Transportschäden können schnell zu erheblichen finanziellen Verlusten führen. Die Transportversicherung schützt deine Güter auf dem gesamten Transportweg, unabhängig vom Verkehrsträger. Wir klären mit dir, welche Deckungsarten für dein Geschäftsmodell notwendig sind und schließen Lücken in bestehenden Policen. Verlässlicher Schutz für deine gesamte Logistikkette.',
      features: ['Warentransportversicherung', 'Frachtführerhaftung', 'Logistikrisiken', 'Multimodale Transporte'],
    },
    {
      title: 'Betriebliche Altersvorsorge',
      shortTitle: 'Betriebl. Altersv.',
      description:
        'Die betriebliche Altersvorsorge ist ein wirkungsvolles Instrument, um Mitarbeitende langfristig ans Unternehmen zu binden und gleichzeitig steuerliche Vorteile zu nutzen. Sowohl Arbeitgeber als auch Arbeitnehmer profitieren von attraktiven Förderungen durch Steuer- und Sozialabgabenersparnis. Wir beraten dich zu den verschiedenen Durchführungswegen wie Direktversicherung, Pensionskasse oder Pensionsfonds. So gestaltest du als Arbeitgeber ein attraktives Benefit-Paket für dein Team.',
      features: ['Direktversicherung', 'Pensionskasse', 'Pensionsfonds', 'Arbeitgeber-Zuschuss'],
    },
    {
      title: 'Betriebliche Krankenversicherung',
      shortTitle: 'Betriebl. Krankenvers.',
      description:
        'Mit einer betrieblichen Krankenversicherung bietest du deinen Mitarbeitenden attraktive Gesundheitsleistungen, die weit über den gesetzlichen Standard hinausgehen. Von Zahnersatz über Sehhilfen bis zu ambulanten Zusatzleistungen – du stärkt die Mitarbeiterzufriedenheit und -bindung spürbar. Im Wettbewerb um Fachkräfte ist die bKV ein entscheidender Vorteil. Wir finden Gruppenverträge zu günstigen Konditionen, die auf die Größe und Struktur deines Unternehmens zugeschnitten sind.',
      features: ['Ambulante Zusatzleistungen', 'Zahnersatz', 'Sehhilfen', 'Chefarztbehandlung'],
    },
    {
      title: 'Gruppenunfallversicherung',
      shortTitle: 'Gruppen- unfall',
      description:
        'Die Gruppenunfallversicherung schützt deine Mitarbeitenden rund um die Uhr – sowohl im beruflichen als auch im privaten Bereich. Im Falle eines Unfalls mit dauerhafter Invalidität oder Tod erhalten Betroffene bzw. ihre Familien eine finanzielle Absicherung. Als Gruppenvertrag ist diese Absicherung deutlich günstiger als individuelle Policen. Ein starkes Signal als Arbeitgeber, dass dir das Wohlergehen deines Teams wirklich am Herzen liegt.',
      features: ['24h-Schutz', 'Invaliditätsleistung', 'Unfallrente', 'Todesfallleistung'],
    },
    {
      title: 'Betriebliche BU',
      shortTitle: 'Betriebl. BU',
      description:
        'Berufsunfähigkeit trifft nicht nur Einzelpersonen – als Arbeitgeber kannst du deinen Mitarbeitenden über eine betriebliche BU-Versicherung einen wertvollen Schutz bieten. Dieser sichert das Einkommen ab, wenn jemand dauerhaft nicht mehr arbeiten kann. Durch Gruppenverträge profitieren deine Mitarbeitenden von deutlich günstigeren Konditionen und vereinfachten Gesundheitsprüfungen. Ein echter Mehrwert im Rahmen eines modernen Arbeitgeberangebots.',
      features: ['Berufsunfähigkeitsrente', 'Arbeitskraftabsicherung', 'Vereinfachte Gesundheitsprüfung', 'Gruppenkonditionen'],
    },
    {
      title: 'Betriebliche Pflegeversicherung',
      shortTitle: 'Betriebl. Pflege',
      description:
        'Pflegebedürftigkeit ist ein Thema, das immer mehr Menschen betrifft – und die gesetzliche Absicherung ist hierbei oft unzureichend. Mit einer betrieblichen Pflegezusatzversicherung bietest du deinen Mitarbeitenden einen vorausschauenden Schutz, der im Ernstfall wirklich hilft. Die Beiträge sind als Sachbezug oder Entgeltumwandlung gestaltbar und damit steuerlich attraktiv. Ein Zeichen von Fürsorge, das dich als Arbeitgeber von der Konkurrenz abhebt.',
      features: ['Pflegegeld', 'Pflegesachleistungen', 'Pflegeberatung', 'Entgeltumwandlung möglich'],
    },
  ],
};

// ─── GROQ query ───────────────────────────────────────────────────────────────

const SITE_CONTENT_QUERY = `*[_type == "siteContent"][0]{
  hero, about, advisor, testimonial,
  team{ sectionTitle, sectionSubtitle, members[]{ name, role, description } },
  reviews{ sectionTitle, score, totalReviews, items[]{ name, date, text, rating } },
  contact,
  privateServices[]{ title, shortTitle, description, features },
  businessServices[]{ title, shortTitle, description, features }
}`;

// ─── Context ──────────────────────────────────────────────────────────────────

interface ContentContextType {
  content: SiteContent;
  loading: boolean;
  updateContent: (newContent: SiteContent) => void;
  saveContent: (newContent: SiteContent) => Promise<{ success: boolean; message: string }>;
}

const ContentContext = createContext<ContentContextType>({
  content: defaultContent,
  loading: true,
  updateContent: () => {},
  saveContent: async () => ({ success: false, message: '' }),
});

function mergeWithDefaults(data: SiteContent): SiteContent {
  return {
    hero: { ...defaultContent.hero, ...data.hero },
    about: { ...defaultContent.about, ...data.about },
    advisor: { ...defaultContent.advisor, ...data.advisor },
    testimonial: { ...defaultContent.testimonial, ...data.testimonial },
    team: {
      ...defaultContent.team,
      ...data.team,
      members: data.team?.members?.length ? data.team.members : defaultContent.team.members,
    },
    reviews: {
      ...defaultContent.reviews,
      ...data.reviews,
      items: data.reviews?.items?.length ? data.reviews.items : defaultContent.reviews.items,
    },
    contact: { ...defaultContent.contact, ...data.contact },
    privateServices: data.privateServices?.length ? data.privateServices : defaultContent.privateServices,
    businessServices: data.businessServices?.length ? data.businessServices : defaultContent.businessServices,
  };
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lsKey = 'tobfinance_content';
    sanityClient
      .fetch<SiteContent>(SITE_CONTENT_QUERY)
      .then((data) => {
        if (data) {
          setContent(mergeWithDefaults(data));
        } else {
          const saved = localStorage.getItem(lsKey);
          if (saved) setContent(JSON.parse(saved));
        }
      })
      .catch(() => {
        const saved = localStorage.getItem(lsKey);
        if (saved) {
          try { setContent(JSON.parse(saved)); } catch { /* ignore */ }
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
  };

  const saveContent = async (
    newContent: SiteContent,
  ): Promise<{ success: boolean; message: string }> => {
    if (!WRITE_TOKEN) {
      return {
        success: false,
        message: 'Kein Schreib-Token konfiguriert – Speichern nicht möglich.',
      };
    }

    try {
      const writeClient = sanityClient.withConfig({ token: WRITE_TOKEN, useCdn: false });
      await writeClient.createOrReplace({
        _id: 'siteContent',
        _type: 'siteContent',
        ...newContent,
      });
      setContent(newContent);
      return { success: true, message: 'Gespeichert ✓' };
    } catch (err) {
      console.error('Sanity write error:', err);
      return { success: false, message: 'Fehler beim Speichern. Bitte erneut versuchen.' };
    }
  };

  return (
    <ContentContext.Provider value={{ content, loading, updateContent, saveContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
