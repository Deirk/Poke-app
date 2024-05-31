import { StateCreator, create } from 'zustand';


import { devtools, persist } from 'zustand/middleware';
import { SimplePokemon } from '../../../interfaces';
import { SinglePokemonState } from './interfaces/single-pokemon-state.interface';

interface FavouriteState {
  favourites: SinglePokemonState,

  toggleFavorite: ( pokemon: SimplePokemon ) => void,
}

const storeApi: StateCreator<FavouriteState> = ( set, get ) => ( {
  favourites: {},
  toggleFavorite: ( pokemon ) => {
    const { name } = pokemon;
    const actualState = { ...get().favourites };

    if ( !!actualState[ name ] ) {
      delete actualState[ name ];
      return set( state => ( { ...state, favourites: actualState } ) );
    }

    actualState[ name ] = pokemon;
    return set( state => ( { ...state, favourites: actualState } ) );
  },
} );

export const useFavouriteStore = create<FavouriteState>()(
  devtools(
    persist(
      storeApi,
      { name: 'favourite-store' }
    )
  )
);