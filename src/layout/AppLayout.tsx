import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import PageNavigation from './PageNavigation';

const AppLayout = () => {
  return (
    <div className={styles.container}>
      <PageNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
