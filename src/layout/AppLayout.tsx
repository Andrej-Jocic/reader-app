import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import PageNavigation from './PageNavigation';

interface Props {
  outlet?: ReactNode;
}

const AppLayout = ({ outlet = false }: Props) => {
  return (
    <div className={styles.container}>
      <PageNavigation />
      <main>{outlet ? outlet : <Outlet />}</main>
    </div>
  );
};

export default AppLayout;
