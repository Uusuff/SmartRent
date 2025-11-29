import { createHashRouter } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/HomePage/CatalogPage/CatalogPage';
import { Favorites } from '../pages/HomePage/Favorites/Favorites';
import { ApartmentPage } from '../pages/HomePage/ApartmentPage/ApartmentPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'apartments', element: <CatalogPage /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'apartment/:id', element: <ApartmentPage /> },
      // { path: 'phones', element: <PhonesPage /> },
      // { path: 'phones/:id', element: <PhonesPage /> },
      // { path: 'tablets', element: <TabletsPage /> },
      // { path: 'tablets/:id', element: <TabletsPage /> },
      // { path: 'accessories', element: <AccessoriesPage /> },
      // { path: 'accessories/:id', element: <AccessoriesPage /> },
      // { path: 'favorites', element: <FavoritesPage /> },
      // { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
