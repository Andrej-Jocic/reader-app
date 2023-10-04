import { useSelector } from 'react-redux';

import BookItem from '../components/BookItem';
import styles from '../components/BookList.module.css';
import { getBookmarkedBooks } from '../state/bookshelfSlice';
import BookshelfHome from '../components/BookshelfHome';

// Component renders all bookmarked books
const BookshelfAll = () => {
  const books = useSelector(getBookmarkedBooks);

  if (books.length === 0) return <BookshelfHome />;

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

export default BookshelfAll;
