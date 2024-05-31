import { ChangeEvent, useState } from 'react';

export interface UseSugestionsProp {
  suggestions: string[];
}

export const useSuggestions = ( { suggestions }: UseSugestionsProp ) => {
  const [ inputValue, setInputValue ] = useState<string>( '' );
  const [ filteredSuggestions, setFilteredSuggestions ] = useState<string[]>( [] );
  const [ showSuggestions, setShowSuggestions ] = useState<boolean>( false );

  const handleInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    const value = e.target.value;
    setInputValue( value );
    const filtered = suggestions.filter( ( suggestion ) =>
      suggestion.toLowerCase().includes( value.toLowerCase() )
    );

    setFilteredSuggestions( filtered );
    setShowSuggestions( true );
  };

  const handleBlur = () => {
    setTimeout( () => {
      setShowSuggestions( false );
    }, 100 );
  };

  const handleSelectSugestions = ( value: string ) => {
    setInputValue( value );
    setShowSuggestions( false );
  };

  return {
    inputValue,
    filteredSuggestions,
    showSuggestions,
    handleInputChange,
    handleBlur,
    handleSelectSugestions
  };
};