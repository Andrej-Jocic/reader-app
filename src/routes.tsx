import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/library',
        element: <LibraryPage />,
      },
    ],
  },
]);

export default router;
