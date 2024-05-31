import { createBrowserRouter } from 'react-router-dom';
import { PokeAppLayout } from '../layouts/PokeAppLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { LoginPage } from '../pages/auth/loginPage/LoginPage';
import { Home } from '../pages/home/Home';
import { PokemonPage } from '../pages/pokemon/PokemonPage';
import { FavouriteGrid } from '../pages/favourites/FavouritePage';

export const router = createBrowserRouter( [
  //private routes
  {
    path: '/',
    element: <PokeAppLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/pokemon/:name',
        element: <PokemonPage />
      },
      {
        path: '/favourites',
        element: <FavouriteGrid />
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
