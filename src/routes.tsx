import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import ErrorPage from './pages/ErrorPage';
import BookshelfPage from './pages/BookshelfPage';
import BookshelfAllPage from './pages/BookshelfAllPage';
import ShelvesPage from './pages/ShelvesPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <AppLayout outlet={<ErrorPage />} />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/library',
        element: <LibraryPage />,
      },
      {
        path: '/bookshelf',
        element: <BookshelfPage />,
        children: [
          {
            index: true,
            element: <Navigate replace to="all" />,
          },
          {
            path: 'all',
            element: <BookshelfAllPage />,
          },
          {
            path: 'shelves',
            element: <ShelvesPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
