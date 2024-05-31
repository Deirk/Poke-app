import { useEffect, useState } from 'react';

import styles from './styles/TypeHead.module.css';
import { IoSearch } from 'react-icons/io5';
import { useSuggestions } from '../../hooks';
import { PokemonService } from '../../services/pokemon.service';

export const TypeHead = () => {
  const [ suggestions, setSuggestions ] = useState<string[]>( [] );
  const {
    filteredSuggestions,
    handleBlur,
    handleInputChange,
    handleSelectSugestions,
    inputValue,
    showSuggestions
  } = useSuggestions( { suggestions } );

  const getSuggestions = async () => {
    const data = await PokemonService.getPokemonsSuggestions();
    setSuggestions( data );
  };

  useEffect( () => {
    getSuggestions();
  }, [] );

  return (
    <>
      <div className={ styles.typeHead }>
        <input
          className={ styles.typeHeadInput }
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          onBlur={ handleBlur }
          placeholder="Type something..."
        />
        <button type="submit" className={ styles.typeHeadButton }>
          <IoSearch />
        </button>

      </div>
      {
        showSuggestions &&
        <ul className={ styles.suggestionsContainer }>
          { filteredSuggestions.map( ( suggestion, index ) =>
            <li
              key={ `suggestion-${ suggestion }-${ index }` }
              className={ styles.suggestionItem }
              onClick={ () => handleSelectSugestions(suggestion)}
            >
              <p
                className={ styles.suggestion }
              >
                { suggestion }
              </p>
            </li>
          )
          }
        </ul>
      }
    </>
  );
};
