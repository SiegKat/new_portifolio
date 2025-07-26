import { createContext, useContext, useState, useEffect } from 'react';
import { pt } from '@/data/translations/pt';
import { en } from '@/data/translations/en';

type Language = 'pt' | 'en';
type Translations = typeof pt;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const translations = { pt, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && (saved === 'pt' || saved === 'en')) {
        return saved;
      }
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      return browserLang.startsWith('pt') ? 'pt' : 'en';
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

