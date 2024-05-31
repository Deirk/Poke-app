import { createBrowserRouter } from 'react-router-dom';
import { PokeAppLayout } from '../layouts/PokeAppLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { LoginPage } from '../pages/auth/loginPage/LoginPage';
import { Home } from '../pages/home/Home';

export const router = createBrowserRouter( [
  //private routes
  {
    path: '/',
    element: <PokeAppLayout />,
    children: [
      {
        path: '',
        element: <Home/>
      },
    ]
  },
  //public routes
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      }
    ]

  },
] );
