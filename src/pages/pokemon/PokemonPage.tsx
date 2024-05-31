import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './styles/PokemonPage.module.css';

import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, SimplePokemon } from '../../interfaces';
import { useFavouriteStore } from '../../config/stores';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { Move, PokemonDetailsCard, PokemonType, Sprites } from './components';

export const PokemonPage = () => {

  const { name } = useParams();
  const [ pokemon, setPokemon ] = useState<Pokemon>();
  const isFavourite = useFavouriteStore( state => !!state.favourites[ name || '' ] );
  const toggleFavourite = useFavouriteStore( state => state.toggleFavorite );

  const onToggle = () => {
    if ( !pokemon ) return;
    const newFavorite: SimplePokemon = { name: pokemon?.name, id: `${ pokemon?.id }` };
    toggleFavourite( newFavorite );
  };

  const getPokemon = async () => {
    const pokemon = await PokemonService.getPokemonById( name || '' );
    setPokemon( pokemon );
  };

  useEffect( () => {
    getPokemon();
  }, [] );

  return (
    <div className={ styles.pokemonPage }>
      <div className={ styles.pokemonPageContent }>
        <div className={ styles.pokemonPageHeader }>
          <div className={ styles.pokemonPageTitleContainer }>
            <h1 className={ styles.pokemonPageTitle }>
              #{ pokemon?.id } { pokemon?.name }
            </h1>
            <div className={ styles.pokemonPageFavourite } onClick={ onToggle }>
              { isFavourite ? ( <IoHeart /> ) : ( <IoHeartOutline /> ) }
              <small className={ styles.pokemonPageFavouriteLabel }>
                { isFavourite ? 'Favorite' : 'Add favorite' }
              </small>
            </div>
          </div>
          <div className={ styles.pokemonPageImage }>
            <img
              src={ pokemon?.sprites.other?.showdown.front_default ?? '' }
              width={ 150 }
              height={ 150 }
              alt={ `${ pokemon?.name } image` }
              className="mb-5"
            />
          </div>
        </div>
        <div className={ styles.pokemonPageDetailsContainer }>
          <PokemonDetailsCard title='Regular Sprites' >
            <Sprites
              frontSprite={ pokemon?.sprites.front_default }
              backSprite={ pokemon?.sprites.back_default }
              name={ pokemon?.name } />
          </PokemonDetailsCard>
          <PokemonDetailsCard title='Shiny Sprites' >
            <Sprites
              frontSprite={ pokemon?.sprites.front_shiny }
              backSprite={ pokemon?.sprites.back_shiny }
              name={ pokemon?.name } />
          </PokemonDetailsCard>
          <PokemonDetailsCard title='Types' >
            {
              pokemon?.types.map( ( type, index ) => (
                <PokemonType key={ `type-${ type.type.name }-${ index }` } name={ type.type.name } />
              ) )
            }
          </PokemonDetailsCard>
          <PokemonDetailsCard title='Weight' >
            <span className={ styles.pokemonPageWeight }>
              {
                `${ pokemon?.weight } kg`
              }
            </span>
          </PokemonDetailsCard>
        </div>
        <div className={ styles.pokemonPageMovesContainer }>
        <p className={ styles.pokemonPageMovesTitle }> Moves </p>
          {
            pokemon?.moves.map( ( move, index ) => (
              <Move key={ `move-${ move.move.name }-${ index }` } move={ move.move.name } />
            ) )
          }
        </div>
      </div>
    </div>
  );
};