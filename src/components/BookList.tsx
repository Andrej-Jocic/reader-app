import { useSelector } from 'react-redux';
import { getSearchLoadingState, getSearchBooks } from '../state/librarySlice';
import Spinner from '../ui/Spinner';
import BookItem from './BookItem';
import styles from './BookList.module.css';

const BooksList = () => {
  const books = useSelector(getSearchBooks);
  const loading = useSelector(getSearchLoadingState);

  if (loading) return <Spinner />;

  if (books.length === 0) return null;

  return (
    <section className={styles.booklist}>
      <ul className={styles.booklistContent}>
        {books.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
      </ul>
    </section>
  );
};
export default BooksList;
