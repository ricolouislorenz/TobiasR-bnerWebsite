import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Review {
  name: string;
  date: string;
  text: string;
  rating: number;
}

interface ContentData {
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
    title: string;
    subtitle: string;
  };
  googleReviews: {
    title: string;
    score: number;
    totalReviews: number;
    reviews: Review[];
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    ctaText: string;
  };
  footer: {
    copyright: string;
  };
}

const defaultContent: ContentData = {
  hero: {
    title: 'Deine finanzielle Zukunft in den besten Händen',
    subtitle: 'Versicherungen und Finanzen, die zu dir passen – individuell, transparent und mit echtem Mehrwert.',
    ctaPrimary: 'Kostenlose Beratung vereinbaren',
    ctaSecondary: 'Mehr über uns erfahren'
  },
  about: {
    title: 'Ein unabhängiger und kompetenter Makler mit 5 Jahren Erfahrung',
    description: 'Tobias kümmert sich um alle Anliegen im Bereich Finanzen und Versicherungen. Durch seine jahrelange Erfahrung und sein großes Netzwerk kann er auch weitere Kompetenzen übernehmen. Seine Kunden sind sehr zufrieden mit der persönlichen und professionellen Betreuung, die sie erhalten.'
  },
  advisor: {
    title: 'Vertrauensvoller Berater. Ergebnisorientiert. Beziehungen zuerst.',
    paragraph1: 'Frag jeden, der mit Tobias zusammengearbeitet hat, und er wird dir sagen, dass der Aufbau von Beziehungen seine Superkraft ist. Bekannt dafür, authentische Beziehungen zu pflegen, die auf echter Verbindung beruhen, ist es keine Überraschung, dass der Löwenanteil seines Geschäfts auf Stammkunden und Empfehlungen aufgebaut ist.',
    paragraph2: 'Das ist typisch Tobias. Er hat sich einen Namen als äußerst optimistischer Versicherungsmakler gemacht, der vor Positivität nur so sprüht – das menschliche Äquivalent eines Ausrufezeichens.'
  },
  testimonial: {
    quote: 'Tobias hat mir geholfen, endlich den Überblick über meine Finanzen zu bekommen. Seine ehrliche und transparente Beratung hat meine Erwartungen bei Weitem übertroffen. Ich fühle mich jetzt bestens abgesichert und für die Zukunft gewappnet!',
    author: 'Michael K., Privatkunde seit 2022'
  },
  team: {
    title: 'Unser Team',
    subtitle: 'Lerne die Menschen kennen, die sich täglich für deine finanzielle Zukunft einsetzen'
  },
  googleReviews: {
    title: 'Google Bewertungen',
    score: 5.0,
    totalReviews: 47,
    reviews: [
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
    ]
  },
  contact: {
    title: 'Bereit für deine finanzielle Zukunft?',
    subtitle: 'Vereinbare jetzt ein kostenloses Erstgespräch und lass uns gemeinsam die beste Lösung für dich finden.',
    phone: '+49 40 123 456 789',
    email: 'info@tobfinance.de',
    address: 'Hamburg, Deutschland',
    ctaText: 'Kostenlose Beratung vereinbaren'
  },
  footer: {
    copyright: '© 2026 tobfinance - Tobias Rübner Versicherungsmakler'
  }
};

interface ContentContextType {
  content: ContentData;
  updateContent: (newContent: ContentData) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContent);

  // Load from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('tobfinance_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }
  }, []);

  const updateContent = (newContent: ContentData) => {
    setContent(newContent);
    localStorage.setItem('tobfinance_content', JSON.stringify(newContent));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('tobfinance_content');
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}
