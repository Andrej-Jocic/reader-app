import { Link } from 'react-router-dom';

// import {
//   bookmarkBook,
//   getBookmark,
//   getDoneState,
//   toogleDoneBook,
//   unbookmarkBook,
// } from './bookshelfSlice';

import styles from './BookItem.module.css';
import Book from '../entities/Book';
import sliceTitle from '../helpers/sliceTitle';
import dispayAuthors from '../helpers/displayAuthors';

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  //   const dispatch = useDispatch();

  //   const bookmarked = useSelector(getBookmark(book.id));

  //   const handleBookmark = () => {
  //     if (bookmarked) dispatch(unbookmarkBook(book.id));
  //     if (!bookmarked) dispatch(bookmarkBook(book));
  //   };

  //   const done = useSelector(getDoneState(book.id));

  //   const handleDone = () => {
  //     dispatch(toogleDoneBook(book.id));
  //   };

  return (
    <li className={styles.bookItem}>
      <div className={styles.bookItemImg}>
        <img src={book.coverURL} alt="book cover" />
      </div>

      <div className={styles.box}>
        {/* <Icon onClick={handleBookmark} title="Bookmark" showIcon={bookmarked} /> */}

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
