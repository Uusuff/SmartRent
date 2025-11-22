import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface LangContextType {
  lang: string;
  setLang: (lang: string) => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'ENG',
  setLang: () => {},
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<string>(
    (localStorage.getItem('lang') as string) || 'ENG',
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
