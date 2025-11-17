import { createHashRouter } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: 'accessories/:id', element: <AccessoriesPage /> },
      // { path: 'favorites', element: <FavoritesPage /> },
      // { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
