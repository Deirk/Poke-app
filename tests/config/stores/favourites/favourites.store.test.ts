import { act, renderHook } from '@testing-library/react';
import { useFavouriteStore } from '../../../../src/config/stores/favourites/favourites.store';
import { SimplePokemon } from '../../../../src/interfaces';

const initialState = {
  favourites: {},
};

const testPokemons: SimplePokemon[] = [
  { name: 'bulbasaur', id: '1' },
  { name: 'ivysaur', id: '2' },
];

const originalState = useFavouriteStore.getState();

describe( 'config/stores/favourites/favourites.store.ts test', () => {

  beforeEach( () => {
    useFavouriteStore.setState( {
      ...originalState
    } );
  } );

  test( 'Must be initial state', () => {
    const { result } = renderHook( () => useFavouriteStore() );
    expect( result.current ).toMatchObject( {
      ...initialState,
      toggleFavorite: expect.any( Function ),
    } );
  } );

  test( 'Toggle favourites must save pokemons in state', () => {
    const { result } = renderHook( () => useFavouriteStore() );
    act( () => { result.current.toggleFavorite( testPokemons[ 0 ] ); } );
    expect( !!result.current.favourites[ testPokemons[ 0 ].name ] ).toBe( true );
    act( () => { result.current.toggleFavorite( testPokemons[ 1 ] ); } );
    expect( Object.keys( result.current.favourites ).length ).toBe( 2 );
  } );

  test( 'Toggle favourites must remove pokemons in state', () => {
    const { result } = renderHook( () => useFavouriteStore() );
    act( () => { result.current.toggleFavorite( testPokemons[ 0 ] ); } );
    expect( !!result.current.favourites[ testPokemons[ 0 ].name ] ).toBe( true );
    act( () => { result.current.toggleFavorite( testPokemons[ 0 ] ); } );
    expect( !!result.current.favourites[ testPokemons[ 0 ].name ] ).toBe( false );
  } );
} );