// import { useSelector } from 'react-redux';

// import { getBooks, getLoadingState } from './librarySlice';

import Search from '../components/Search';
import styles from './LibraryPage.module.css';

const Library = () => {
  //   const books = useSelector(getBooks);
  //   const loading = useSelector(getLoadingState);
  return (
    <section className={styles.section}>
      <Search />
      {/* <BooksList books={books} loading={loading} /> */}
    </section>
  );
};

export default Library;
