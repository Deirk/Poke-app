import styles from '../styles/PokemonType.module.css';

interface PokemonTypeProps {
  name: string;
}

export const PokemonType = ( { name }: PokemonTypeProps ) => {
  return (
    <p className={ styles.pokemonType }>{ name }</p>
  );
};