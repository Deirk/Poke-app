import { Navigate, Outlet } from 'react-router-dom';

import styles from './styles/PokeAppLayout.module.css';
import { useAuthStore } from '../config/stores/auth/auth.store';
import { Sidebar } from '../shared/components/navigation/sidebar/Sidebar';

export const PokeAppLayout = () => {

  const authStatus = useAuthStore( state => state.status );

  if ( authStatus === 'unauthorized' || authStatus === 'pending' ) {
    return <Navigate to='/auth/login' />;
  }

  return (
    <div className={ styles.pokeAppBody }>
      <div className={ styles.pokeAppContainer }>
        <Sidebar />
        <div className={ styles.pokeAppContent }>
          <Outlet />
        </div>
      </div>
    </div>
  );
};