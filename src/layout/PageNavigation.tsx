import { NavLink } from 'react-router-dom';

import styles from './PageNavigation.module.css';
import Logo from '../ui/Logo';

const PageNavigation = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/library">Library</NavLink>
          </li>
          <li>
            <NavLink to="/bookshelf">Bookshelf</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageNavigation;
