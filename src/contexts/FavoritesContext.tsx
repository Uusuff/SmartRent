import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Apartment } from '../types/Apartment';

interface FavoritesContextType {
  favorites: Apartment[];
  toggleFavorite: (apartment: Apartment) => void;
  isFavorite: (id: string | number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Apartment[]>(() => {
    const stored = localStorage.getItem('favorites');

    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (apartment: Apartment) => {
    setFavorites(prev => {
      const exists = prev.some(fav => fav.id === apartment.id);

      if (exists) {
        return prev.filter(fav => fav.id !== apartment.id);
      } else {
        return [...prev, apartment];
      }
    });
  };

  const isFavorite = (id: string | number) => {
    return favorites.some(fav => fav.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};
