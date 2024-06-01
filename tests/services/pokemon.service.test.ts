import axios, { AxiosResponse } from 'axios';
import { PokemonService } from '../../src/services/pokemon.service';
import { mockPokemonData, mockPokemonSuggestions, mockPokemonsResponse, mockSinglePokemonResponse } from '../fixtures/mockPokemon';
import { PokemonData } from '../../src/interfaces';
describe( 'services/auth.service.ts test', () => {

  afterEach( () => {
    jest.restoreAllMocks();
  } );

  beforeEach( () => {
    jest.restoreAllMocks();
  } );

  test( 'getPokemons must return PokemonData', async () => {
    const mAxiosResponse = {
      data: mockPokemonsResponse,
    } as AxiosResponse;
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );
    const pokemons = await PokemonService.getPokemons();

    expect( pokemons ).toMatchObject<PokemonData>( mockPokemonData );

  } );

  test( 'getPokemonsSuggestions must return String array', async () => {
    const mAxiosResponse = {
      data: mockPokemonsResponse,
    } as AxiosResponse;
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );
    const pokemonSuggestions = await PokemonService.getPokemonsSuggestions();

    expect( pokemonSuggestions ).toEqual( mockPokemonSuggestions );
  } );

  test( 'getPokemonsSuggestions from localStorage an return Stringa array', async () => {
    const mAxiosResponse = {
      data: mockPokemonsResponse,
    } as AxiosResponse;
    localStorage.setItem( 'suggestions', JSON.stringify( { mockPokemonsResponse } ) );
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );

    const pokemonSuggestions = await PokemonService.getPokemonsSuggestions();

    expect( pokemonSuggestions ).toEqual( pokemonSuggestions );
  } );

  test( 'getPokemonById must return a pokemon', async () => {
    const mAxiosResponse = {
      data: mockSinglePokemonResponse,
    } as AxiosResponse;
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );
    const pokemonSuggestions = await PokemonService.getPokemonById( '1' );

    expect( typeof pokemonSuggestions ).toBe( 'object' );
    expect( pokemonSuggestions ).toMatchObject( mockSinglePokemonResponse );

  } );

} );