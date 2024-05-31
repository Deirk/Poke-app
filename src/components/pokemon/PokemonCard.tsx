
import { IoHeart, IoHeartOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import { SimplePokemon } from '../../interfaces';
import { useFavouriteStore } from '../../config/stores';

import styles from './styles/PokemonCard.module.css';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ( { pokemon }: Props ) => {

  const navigate = useNavigate();
  const { id, name } = pokemon;
  const isFavourite = useFavouriteStore( state => !!state.favourites[ name ] );
  const toggleFavourite = useFavouriteStore( state => state.toggleFavorite );

  const onToggle = () => {
    toggleFavourite( pokemon );
  };

  const onClick = () => {
    console.log( 'click' );
    return navigate( `/pokemon/${ name }` );
  };

  return (
    <div className={ styles.pokemonCard } onClick={ () => onClick() }>
      <div className={ styles.pokemonCardContent }>
        <div id="pokemon-image-container">
          <img
            src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png` }
            className={ styles.pokemonCardImage }
            width={ 0 }
            height={ 0 }
            alt={ `${ name } sprite` }
          />
        </div>
        <p className={ styles.pokemonCardName }>{ name }</p>
        <p className={ styles.pokemonCardId }>{ id }</p>
      </div>
      <div
        onClick={ ( e ) => {
          e.stopPropagation();
          onToggle();
        } }
        className={ styles.pokemonCardFooter } >
        <div className={ styles.pokemonCardFooterIcon }>
          { isFavourite ? ( <IoHeart /> ) : ( <IoHeartOutline /> ) }
        </div>
        <div>
          <p className={ styles.pokemonCardFooterLabel }>
            { isFavourite ? 'Favorite' : 'Not favorite' }
          </p>
        </div>
      </div>
    </div>
  );
};
