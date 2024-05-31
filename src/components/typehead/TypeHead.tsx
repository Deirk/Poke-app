import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles/TypeHead.module.css';
import { useSuggestions } from '../../hooks';
import { PokemonService } from '../../services/pokemon.service';

export const TypeHead = () => {
  const navigate = useNavigate()
  const [ suggestions, setSuggestions ] = useState<string[]>( [] );
  const {
    filteredSuggestions,
    handleBlur,
    handleInputChange,
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
    <div className={ styles.typeHead }>
      <div className={styles.typeHeadInputContainer}>
        <input
          className={ styles.typeHeadInput }
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          onBlur={ handleBlur }
          placeholder="Type something..."
        />
      </div>
      {
        showSuggestions &&
        <ul className={ styles.suggestionsContainer }>
          { filteredSuggestions.map( ( suggestion, index ) =>
            <li
              key={ `suggestion-${ suggestion }-${ index }` }
              className={ styles.suggestionItem }
              onClick={ () => navigate(`/pokemon/${suggestion}`)}
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
    </div>
  );
};
