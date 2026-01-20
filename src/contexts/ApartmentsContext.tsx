/* eslint-disable no-console */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import axios from 'axios';
import { Apartment } from '../types/Apartment';

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

export const ApartmentsProvider = ({ children }: Props) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);
  const API_URL = `https://smart-rent-backend.vercel.app/apartments`;

  const fetchApartments = async () => {
    setLoading(true);

    try {
      const response = await axios.get<Apartment[]>(`${API_URL}`);

      setApartments(response.data);
    } catch (error) {
      console.error('Error fetching apartments:', error);
      setApartments([]);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

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
