import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import BookshelfNav from '../components/BookshelfNav';
import { getBookmarkedBooks } from '../state/bookshelfSlice';
import styles from './BookshelfPage.module.css';

const Bookshelf = () => {
  const books = useSelector(getBookmarkedBooks);

  return (
    <section className={styles.section}>
      {!books.length ? (
        <h1>
          Your bookshelf is currently empty.
          <br />
          Start your reading journey by exploring our{' '}
          <Link to="/library" className={styles.link}>
            Library
          </Link>{' '}
          and adding your favorite books.
        </h1>
      ) : (
        <BookshelfNav />
      )}

      <Outlet />
    </section>
  );
};

export default Bookshelf;
