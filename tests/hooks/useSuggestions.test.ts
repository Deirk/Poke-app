import { renderHook, waitFor } from '@testing-library/react';
import { useSuggestions } from '../../src/hooks/useSuggestions';
import { act } from 'react';

const initialSuggestions: string[] = [
  'action',
  'bring',
  'cool',
];

const initialState = {
  inputValue: '',
  filteredSuggestions: [],
  showSuggestions: false,
};

describe( 'hooks/useSuggestions.ts test', () => {

  test( 'useSuggestions must return initial state', () => {
    const { result } = renderHook( () => useSuggestions( { suggestions: initialSuggestions } ) );
    expect( result.current ).toMatchObject( {
      ...initialState,
      handleInputChange: expect.any( Function ),
      handleBlur: expect.any( Function ),
      handleSelectSugestions: expect.any( Function )
    } );
  } );

  test( 'handleChange must change inputValue, showSuggestions must be true and suggestions must have 2 elements', () => {
    const { result } = renderHook( () => useSuggestions( { suggestions: initialSuggestions } ) );

    const newValue = 'c';
    const event = {
      target: { name: 'search', value: newValue }
    } as React.ChangeEvent<HTMLInputElement>;

    act( () => {
      result.current.handleInputChange( event );
    } );

    expect( result.current.inputValue ).toBe( newValue );
    expect( result.current.showSuggestions ).toBe( true );
    expect( result.current.filteredSuggestions ).toHaveLength( 2 );
  } );

  test( 'handleBlur must change showSuggestions to false', async () => {
    const { result } = renderHook( () => useSuggestions( { suggestions: initialSuggestions } ) );

    const newValue = 'c';
    const event = {
      target: { name: 'search', value: newValue }
    } as React.ChangeEvent<HTMLInputElement>;

    act( () => {
      result.current.handleInputChange( event );
    } );

    expect( result.current.showSuggestions ).toBe( true );

    act( () => {
      result.current.handleBlur();
    } );

    expect( result.current.showSuggestions ).toBe( true );
  } );

  test( 'handleSelectSugestions must change inputValue and showSuggestions to false', async () => {
    const { result } = renderHook( () => useSuggestions( { suggestions: initialSuggestions } ) );

    const newValue = 'c';

    const event = {
      target: { name: 'search', value: newValue }
    } as React.ChangeEvent<HTMLInputElement>;

    act( () => {
      result.current.handleInputChange( event );
    } );

    expect( result.current.showSuggestions ).toBe( true );

    const selectedSuggestion = result.current.filteredSuggestions[ 0 ];

    act( () => {
      result.current.handleSelectSugestions( selectedSuggestion );
    } );

    await waitFor( () => expect( result.current.inputValue ).toBe( selectedSuggestion ) );
    await waitFor( () => expect( result.current.showSuggestions ).toBe( false ));
  } );

} );