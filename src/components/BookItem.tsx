import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Book from '../entities/Book';
import dispayAuthors from '../helpers/displayAuthors';
import sliceTitle from '../helpers/sliceTitle';
import { useDispatch } from '../hooks/useDispatch';
import { getIsDone, toggleDone } from '../state/bookSlice';
import {
  getIsBookmarked,
  toggleBookmark,
  toogleBook,
} from '../state/bookshelfSlice';
import Icon from '../ui/Icon';
import styles from './BookItem.module.css';

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  const dispatch = useDispatch();

  const bookmarked = useSelector(getIsBookmarked(book.id));
  const done = useSelector(getIsDone(book.id));

  function handleBookmark() {
    dispatch(toogleBook(book));
    dispatch(toggleBookmark({ id: book.id }));
  }

  function handleDone() {
    dispatch(toggleDone({ id: book.id }));
  }

  return (
    <li className={styles.bookItem}>
      <div className={styles.bookItemImg}>
        <img src={book.coverURL} alt="book cover" />
      </div>

      <div className={styles.box}>
        <Icon
          onClick={handleBookmark}
          title="Bookmark"
          active={bookmarked}
          absoulte={true}
        />

        {bookmarked && <Icon onClick={handleDone} title="Done" active={done} />}
      </div>

      <div className={styles.bookItemInfo}>
        <Link to={`/book/${book.id}`}>
          <div className={styles.title}>
            <span>{sliceTitle(book.title)}</span>
          </div>
        </Link>

        <div className={styles.author}>
          <span className={styles.capitalize}>Author: </span>
          <span>{dispayAuthors(book.author)}</span>
        </div>

        <div className={styles.year}>
          <span className={styles.capitalize}>Publish Year: </span>
          <span>{book.publishYear}</span>
        </div>
      </div>
    </li>
  );
}

export default BookItem;
