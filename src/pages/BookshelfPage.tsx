import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import BookshelfHome from '../components/BookshelfHome';
import BookshelfNav from '../components/BookshelfNav';
import {
  getBookmarkedBooksLength,
  getShelvesLength,
} from '../state/bookshelfSlice';
import styles from './BookshelfPage.module.css';

const Bookshelf = () => {
  const booksLength = useSelector(getBookmarkedBooksLength);
  const shelvesLength = useSelector(getShelvesLength);

  return (
    <section className={styles.section}>
      {!booksLength && !shelvesLength ? <BookshelfHome /> : <BookshelfNav />}

      <Outlet />
    </section>
  );
};

export default Bookshelf;
