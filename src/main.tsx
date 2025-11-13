import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { router } from './router/AppRouter';
import { LangProvider } from './contexts/LangContext';
import { ApartmentsProvider } from './contexts/ApartmentsContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
      <ApartmentsProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </ApartmentsProvider>
    </LangProvider>
  </React.StrictMode>,
);
