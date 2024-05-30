import { createBrowserRouter } from 'react-router-dom';
import { PokeAppLayout } from '../layouts/PokeAppLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { LoginPage } from '../pages/auth/loginPage/LoginPage';



export const router = createBrowserRouter( [
  //private routes
  {
    path: '/',
    element: <PokeAppLayout />,
    children: [
      {
        path: '',
        element: <>Hello World</>
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
