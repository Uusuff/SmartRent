import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { router } from './router/AppRouter';
import { ApartmentsProvider } from './contexts/ApartmentsContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import './i18m';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApartmentsProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </ApartmentsProvider>
  </React.StrictMode>,
);
