import { NavLink } from 'react-router-dom';
import styles from './BookshelfNav.module.css';

function BookshelfNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="all">All</NavLink>
        </li>
        <li>
          <NavLink to="shelves">Shelves</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BookshelfNav;
