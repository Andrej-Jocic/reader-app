import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import ShelfList from '../components/ShelfList';
import { useDispatch } from '../hooks/useDispatch';
import {
  createShelf,
  getBookmarkedBooks,
  getShelfNames,
} from '../state/bookshelfSlice';
import styles from './ShelvesPage.module.css';
import sliceTitle from '../helpers/sliceTitle';

const ShelvesPage = () => {
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  const books = useSelector(getBookmarkedBooks);
  const shelfNames = useSelector(getShelfNames);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const shelfName = formData.get('shelf') as string;

    if (shelfName.length === 0) return;
    // TODO: show message if the shelf name already exist
    if (shelfNames.includes(shelfName)) return;

    const bookIds = Object.keys(Object.fromEntries(formData)).filter(
      (key) => key !== 'shelf'
    );

    if (bookIds.length === 0) return;

    dispatch(createShelf({ shelfName, bookIds }));

    setShowForm((form) => !form);
  };

  return (
    <>
      <section>
        {!showForm ? (
          <button
            className={styles.cta}
            onClick={() => setShowForm((form) => !form)}
          >
            New Shelf
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              className={styles.search}
              type="text"
              name="shelf"
              placeholder="Enter shelf name"
            />
            <div className={styles.box}>
              {books.map((book) => (
                <label htmlFor={book.id} key={book.id} className={styles.book}>
                  <input
                    name={book.id}
                    value={book.id}
                    id={book.id}
                    type="checkbox"
                  />
                  {sliceTitle(book.title)}, {book.publishYear}
                </label>
              ))}
            </div>
            <button type="submit" className={styles.cta}>
              Create shelf
            </button>
          </form>
        )}
      </section>

      <ShelfList />
    </>
  );
};

export default ShelvesPage;
