import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { MultiLangText } from '../types/Apartment';

interface LangContextType {
  lang: keyof MultiLangText;
  setLang: (lang: keyof MultiLangText) => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'ENG',
  setLang: () => {},
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState(
    (localStorage.getItem('lang') as keyof MultiLangText) || 'ENG',
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
