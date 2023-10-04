import { Link } from 'react-router-dom';
import styles from './BookshelfHome.module.css';
function BookshelfHome() {
  return (
    <h1>
      Your bookshelf is currently empty.
      <br />
      Start your reading journey by exploring our{' '}
      <Link to="/library" className={styles.link}>
        Library
      </Link>{' '}
      and adding your favorite books.
    </h1>
  );
}

export default BookshelfHome;
