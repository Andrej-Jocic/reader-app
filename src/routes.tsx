import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import bookLoader from './loaders/bookPage.loader';
import BookPage from './pages/BookPage';
import BookshelfAllPage from './pages/BookshelfAllPage';
import BookshelfPage from './pages/BookshelfPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
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
      {
        path: '/book/:id',
        element: <BookPage />,
        loader: bookLoader,
      },
    ],
  },
]);

export default router;
