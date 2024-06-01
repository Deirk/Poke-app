import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/auth/loginPage/LoginPage';



export const router = createBrowserRouter( [
  //private routes
  {
    path: '/',
    async lazy() {
      let { PokeAppLayout } = await import( "../layouts/PokeAppLayout" );
      return { Component: PokeAppLayout };
    },
    children: [
      {
        path: '',
        async lazy() {
          let { Home } = await import( "../pages/home/Home" );
          return { Component: Home };
        },
      },
      {
        path: '/pokemon/:name',
        async lazy() {
          let { PokemonPage } = await import( "../pages/pokemon/PokemonPage" );
          return { Component: PokemonPage };
        },
      },
      {
        path: '/favourites',
        async lazy() {
          let { FavouriteGrid } = await import( "../pages/favourites/FavouritePage" );
          return { Component: FavouriteGrid };
        },
      },
    ]
  },
  //public routes
  {
    path: 'auth',
    async lazy() {
      let { AuthLayout } = await import( "../layouts/AuthLayout" );
      return { Component: AuthLayout };
    },
    children: [
      {
        path: 'login',
        async lazy() {
          let { LoginPage } = await import( "../pages/auth/loginPage/LoginPage" );
          return { Component: LoginPage };
        },
      }
    ]

  },
] );
