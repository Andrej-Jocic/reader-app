import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Notes from '../components/Notes';
import BookDetails from '../entities/BookDetails';
import displayAuthors from '../helpers/displayAuthors';
import { getIsBookmarked } from '../state/bookshelfSlice';
import styles from './BookPage.module.css';

const BookPage = () => {
  const navigate = useNavigate();

  const book = useLoaderData() as BookDetails;
  const bookmarked = useSelector(getIsBookmarked(book.id));

  return (
    <section className={styles.bookDetails}>
      <div>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={22} />
          <span>Go Back</span>
        </button>

        <div className={styles.bookDetailsContent}>
          <div className={styles.bookDetailsImg}>
            <img
              src={book.coverImg}
              className={styles.coverImg}
              alt="cover img"
            />
          </div>
          <div className={styles.bookDetailsInfo}>
            <div className={`${styles.bookDetailsItem} ${styles.title}`}>
              <span className={styles.title}>{book.title}</span>
            </div>
            <div className={styles.bookDetailsItem}>
              <span className={styles.weight}>Publish year: </span>
              <span className={styles.opacity}>
                {book.publishYear ?? 'unknown'}
              </span>
            </div>
            <div className={styles.bookDetailsItem}>
              <span className={styles.weight}>Genre: </span>
              <span className={styles.opacity}>
                {book.subjects ?? 'unkonwn'}
              </span>
            </div>
            <div className={styles.bookDetailsItem}>
              <span className={styles.weight}>Subject places: </span>
              <span className={styles.opacity}>
                {book.subjectPlaces
                  ? displayAuthors(book.subjectPlaces)
                  : 'unknown'}
              </span>
            </div>
            <div className={styles.bookDetailsItem}>
              <span className={styles.weight}>Description: </span>
              <span className={styles.opacity}>
                {book.description ?? 'unknown'}
              </span>
            </div>
          </div>
        </div>
      </div>
      {bookmarked && <Notes />}
    </section>
  );
};

export default BookPage;
