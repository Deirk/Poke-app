import { useEffect, useState } from 'react';
import { PokemonData } from '../interfaces';
import { PokemonService } from '../services/pokemon.service';

const initialState: PokemonData = {
  actualPage: 0,
  pokemons: [],
  totalPages: 0,
  nextPage: '',
  previousPage: '',
};

export enum PaginationActions {
  NEXT_PAGE = 'nextPage',
  PREVIOUS_PAGE = 'previousPage',
}

export const usePokemonService = () => {

  const [ pokemonsData, setPokemonsData ] = useState<PokemonData>( initialState );
  const { pokemons, totalPages, actualPage, nextPage, previousPage } = pokemonsData;

  const getPokemons = async ( path?: string ) => {
    const data = await PokemonService.getPokemons( path );
    setPokemonsData( data );
  };

  const handleUsePagination = ( actions: PaginationActions ) => {
    switch ( actions ) {
      case PaginationActions.PREVIOUS_PAGE:
        if (previousPage) getPokemons(previousPage);
        break;

      case PaginationActions.NEXT_PAGE:
        getPokemons(nextPage);
        break;
    }
  };

  useEffect( () => {
    getPokemons();
  }, [] );

  return {
    pokemons,
    totalPages,
    actualPage,
    handleUsePagination,
  };
};