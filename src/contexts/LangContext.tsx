import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type Lang = 'en' | 'ua';

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem('lang') as Lang) || 'en',
  );

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
