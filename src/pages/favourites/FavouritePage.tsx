

import styles from './styles/FavouritePage.module.css';
import { useFavouriteStore } from '../../config/stores';
import { PokemonCard } from '../../components/pokemon/PokemonCard';
import { NoFavorites } from './components/NoFavourites';

export const FavouriteGrid = () => {
  const pokemons = useFavouriteStore( state => Object.values( state.favourites ) );

  return (
    <div className={styles.favouritePage}>
      {
        pokemons.length === 0 ? ( <NoFavorites /> ) :
          <div className={ styles.favouriteContainer }>
            {
              pokemons?.map( pokemon => <PokemonCard key={ pokemon.id } pokemon={ pokemon } /> )
            }
          </div >
      }
    </div>
  );
};