import { act, renderHook, waitFor } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';

import { PaginationActions, usePokemonService } from '../../src/hooks/usePokemonService';
import { mockPokemonList, mockPokemonsPaginationResponse, mockPokemonsResponse } from '../fixtures/mockPokemon';


describe( 'hooks/usePokemonService.ts test', () => {

  afterEach( () => {
    jest.restoreAllMocks();
  } );

  beforeEach( () => {
    jest.restoreAllMocks();
  } );

  test( 'usePokemonService must return initial state', async () => {
    const mAxiosResponse = {
      data: mockPokemonsResponse,
    } as AxiosResponse;
    const axiosSpy = jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );
    const { result } = await waitFor( () => renderHook( () => usePokemonService() ) );

    await waitFor( () => expect( result.current ).toMatchObject( {
      pokemons: [],
      totalPages: 0,
      actualPage: 0,
      handleUsePagination: expect.any( Function )
    } ) );

    expect( axiosSpy ).toHaveBeenCalled();

    await waitFor( () => expect( result.current ).toMatchObject( {
      pokemons: mockPokemonList,
      totalPages: 1,
      actualPage: 1,
      handleUsePagination: expect.any( Function )
    } ) );

  } );

  test( 'handleUsePagination NEXT PAGE must return mockPokemonsPaginationResponse data', async () => {
    const mAxiosResponse = {
      data: mockPokemonsResponse,
    } as AxiosResponse;
    const axiosSpy = jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );
    const { result } = await waitFor( () => renderHook( () => usePokemonService() ) );

    await waitFor( () => expect( axiosSpy ).toHaveBeenCalled() );

    const mAxiosPaginationResponse = {
      data: mockPokemonsPaginationResponse,
    } as AxiosResponse;
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosPaginationResponse );

    await waitFor( () => act( async () => result.current.handleUsePagination( PaginationActions.NEXT_PAGE ) ) );

    expect( result.current.pokemons[ 0 ] ).toEqual( { id: "1", name: "weedle" } );

  } );

  test( 'handleUsePagination PREVIOUS PAGE must return mockPokemonsPaginationResponse data', async () => {
    const mAxiosResponse = {
      data: mockPokemonsResponse,
    } as AxiosResponse;
    const axiosSpy = jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosResponse );
    const { result } = await waitFor( () => renderHook( () => usePokemonService() ) );

    await waitFor( () => expect( axiosSpy ).toHaveBeenCalled() );

    const mAxiosPaginationResponse = {
      data: mockPokemonsPaginationResponse,
    } as AxiosResponse;
    jest.spyOn( axios, 'get' ).mockResolvedValueOnce( mAxiosPaginationResponse );

    await waitFor( () => act( async () => result.current.handleUsePagination( PaginationActions.PREVIOUS_PAGE ) ) );

    expect( result.current.pokemons[ 0 ] ).toEqual( { id: "1", name: "weedle" } );

  } );

} );