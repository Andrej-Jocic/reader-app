import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to="/" className={styles.container}>
      <img src="/logo.png" alt="Reader App logo" className={styles.logo} />
      <p>Reader App</p>
    </Link>
  );
}

export default Logo;
