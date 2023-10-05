import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from '../entities/Book';
import useCloseAutocomplete from '../hooks/useCloseAutocomplete';
import { useDispatch } from '../hooks/useDispatch';
import {
  getBookmarkedBookIds,
  toggleBookmark,
  toogleBook,
} from '../state/bookshelfSlice';
import { getAutocomplete } from '../state/librarySlice';
import Icon from '../ui/Icon';
import styles from './Autocomplete.module.css';
import sliceTitle from '../helpers/sliceTitle';

const Autocomplete = () => {
  const ref = useRef<HTMLUListElement | null>(null);

  // custom hook to close autocomplete window when user click outside it
  useCloseAutocomplete(ref);

  const dispatch = useDispatch();

  const autocomplete = useSelector(getAutocomplete);
  const bookmarkedBookIds = useSelector(getBookmarkedBookIds);

  function handleBookmark(book: Book) {
    dispatch(toogleBook(book));
    dispatch(toggleBookmark({ id: book.id }));
  }

  return (
    <ul ref={ref} className={styles.box}>
      {autocomplete.map((book) => (
        <li key={book.id}>
          <Link to={`/book/${book.id}`}>
            <span>{sliceTitle(book.title)}</span>
          </Link>
          <Icon
            title="Bookmark"
            onClick={() => handleBookmark(book)}
            active={bookmarkedBookIds.includes(book.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Autocomplete;
