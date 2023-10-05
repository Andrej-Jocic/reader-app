import BooksList from '../components/BookList';
import Search from '../components/Search';
import styles from './LibraryPage.module.css';

const Library = () => {
  return (
    <section className={styles.section}>
      <Search />
      <BooksList />
    </section>
  );
};

export default Library;
