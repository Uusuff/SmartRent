import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import axios from 'axios';
import { Apartment } from '../types/Apartment';
import { useLang } from './LangContext';

interface ApartmentsContextType {
  apartments: Apartment[];
  loading: boolean;
}

const ApartmentsContext = createContext<ApartmentsContextType | undefined>(
  undefined,
);

interface Props {
  children: ReactNode;
}

const API_URL =
  'https://smart-rent-backend-bw9v080h4-viktoriamyhailiaks-projects.vercel.app';

export const ApartmentsProvider = ({ children }: Props) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useLang();

  const fetchApartments = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Apartment[]>(API_URL, {
        params: { lang },
      });

      setApartments(response.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching apartments:', error);
      setApartments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, [lang]);

  return (
    <ApartmentsContext.Provider value={{ apartments, loading }}>
      {children}
    </ApartmentsContext.Provider>
  );
};

export const useApartments = () => {
  const context = useContext(ApartmentsContext);

  if (!context) {
    throw new Error('useApartments must be used within ApartmentsProvider');
  }

  return context;
};
