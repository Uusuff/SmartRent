import { createHashRouter } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/HomePage/CatalogPage/CatalogPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'apartments', element: <CatalogPage /> },
      // { path: 'phones', element: <PhonesPage /> },
      // { path: 'phones/:id', element: <PhonesPage /> },
      // { path: 'tablets', element: <TabletsPage /> },
      // { path: 'tablets/:id', element: <TabletsPage /> },
      // { path: 'accessories', element: <AccessoriesPage /> },
      // { path: 'accessories/:id', element: <AccessoriesPage /> },
      // { path: 'favorites', element: <FavoritesPage /> },
      // { path: 'cart', element: <CartPage /> },
      // { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
