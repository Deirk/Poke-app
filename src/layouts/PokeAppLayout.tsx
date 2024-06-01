import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './styles/PokeAppLayout.module.css';
import { useAuthStore } from '../config/stores/auth/auth.store';
import { Sidebar } from '../components/navigation/sidebar/Sidebar';

export const PokeAppLayout = () => {

  const authStatus = useAuthStore( state => state.status );
  const location = useLocation();

  if ( authStatus === 'unauthorized' ) {
    return <Navigate to='/auth/login' />;
  }

  return (
    <div className={ styles.pokeAppBody }>
      <div className={ styles.pokeAppContainer }>
        <Sidebar />
        <div className={ styles.pokeAppContent }>
          <motion.div
            key={ location.pathname }
            initial={ { y: '10px', opacity: 0 } }
            animate={ { y: 0, opacity: 1 } }
            exit={ {
              y: '50%',
              opacity: 0,
              transition: {
                duration: 0.25,
                ease: 'easeInOut',
              }
            } }
            transition={ { duration: 0.75, ease: 'easeInOut' } }
          >
            <Outlet />
          </motion.div>
        </div>
      </div>
    </div>
  );
};