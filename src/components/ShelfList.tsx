import { useSelector } from 'react-redux';
import styles from '../pages/ShelvesPage.module.css';
import { getShelves } from '../state/bookshelfSlice';
import ShelfItem from './ShelfItem';

function ShelfList() {
  const shelves = useSelector(getShelves);

  return (
    <section className={styles.container}>
      <ul className={styles.content}>
        {shelves.map((shelf) => (
          <ShelfItem key={shelf.shelfName} shelf={shelf} />
        ))}
      </ul>
    </section>
  );
}

export default ShelfList;
