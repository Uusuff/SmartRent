import { createHashRouter } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { Favorites } from '../pages/Favorites/Favorites';
import { ApartmentPage } from '../pages/ApartmentPage/ApartmentPage';
import { NotFound } from '../pages/notFoundPage/notFoundPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'apartments', element: <CatalogPage /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'apartment/:id', element: <ApartmentPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
