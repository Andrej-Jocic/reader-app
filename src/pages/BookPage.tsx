import { FaArrowLeft } from 'react-icons/fa';
import { Params, useLoaderData, useNavigate } from 'react-router-dom';
import BookDetails from '../entities/BookDetails';
import displayAuthors from '../helpers/displayAuthors';
import { APIClient } from '../services/api-client';
import styles from './BookPage.module.css';

// TODO: Fix CSS and no values for description, publish year,...
const BookPage = () => {
  const navigate = useNavigate();

  const book = useLoaderData() as BookDetails;

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
      {/* {bookmarked && <Notes id={book.id} />} */}
    </section>
  );
};

const apiClient = new APIClient('/works');

// TODO: extract in different file
export const loader = async ({ params }: { params: Params }) => {
  const book = apiClient.getBook(params);
  return book;
};

export default BookPage;
