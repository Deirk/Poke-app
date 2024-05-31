import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../config/stores';

import styles from './styles/AuthLayout.module.css';

export const AuthLayout = () => {
  const authStatus = useAuthStore( state => state.status );

  if ( authStatus === 'authorized' ) {
    return <Navigate to='/' />;
  }

  return (
    <div className={styles.authLayout}>
      <Outlet />
    </div>
  );
};