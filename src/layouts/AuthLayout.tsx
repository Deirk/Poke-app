import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../config/stores';

export const AuthLayout = () => {
  const authStatus = useAuthStore( state => state.status );

  if ( authStatus === 'authorized' ) {
    return <Navigate to='/' />;
  }

  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center'>
      <Outlet />
    </div>
  );
};