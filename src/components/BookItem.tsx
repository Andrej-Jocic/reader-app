import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Book from '../entities/Book';
import dispayAuthors from '../helpers/displayAuthors';
import sliceTitle from '../helpers/sliceTitle';
import { useDispatch } from '../hooks/useDispatch';
import {
  getBookmarkedBookIds,
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

  const bookmarkedBookIds = useSelector(getBookmarkedBookIds);
  const isBookmarked = bookmarkedBookIds.includes(book.id);
  //TODO: check if all function is with function keyword
  function handleBookmark() {
    dispatch(toogleBook(book));
    dispatch(toggleBookmark({ id: book.id }));
  }
  // getBookmarked() - returns an array of ids of bookmarked books
  return (
    <li className={styles.bookItem}>
      <div className={styles.bookItemImg}>
        <img src={book.coverURL} alt="book cover" />
      </div>

      <div className={styles.box}>
        {/* onClick - add/remove book id to the bookmarked array */}
        {/* onClick - add/remove book from bookmarked book in bookshelf */}
        <Icon
          onClick={handleBookmark}
          title="Bookmark"
          active={isBookmarked}
          absoulte={true}
        />

        {/* {bookshelf && (
          <Icon onClick={handleDone} title="Done" showIcon={done} />
        )} */}
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
