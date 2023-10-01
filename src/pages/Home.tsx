import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.section}>
      <h1>
        Welcome to the Reader App!
        <br />
        Ready to dive into your reading journey?
        <br />
        Head over to the library to explore.
      </h1>
      <h2>
        Discover a world of stories with the Reader App. Dive into a vast
        collection of books, craft your personalized bookshelf, and take quick
        notes as you read.
      </h2>
      <Link to="/library" className={styles.cta}>
        Explore Library
      </Link>
    </section>
  );
};

export default Home;
