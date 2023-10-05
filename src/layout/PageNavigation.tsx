import { NavLink } from 'react-router-dom';
import Logo from '../ui/Logo';
import styles from './PageNavigation.module.css';

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
