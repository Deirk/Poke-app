import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../config/stores';

import bgImage from '../assets/images/bg/pokemon-bg.jpg';

import styles from './styles/AuthLayout.module.css';

export const AuthLayout = () => {
  const authStatus = useAuthStore( state => state.status );

  if ( authStatus === 'authorized' ) {
    return <Navigate to='/' />;
  }

  return (
    <div className={ `${ styles.authLayout }` } style={ { backgroundImage: `url(${bgImage})` } }>
      <Outlet />
    </div>
  );
};