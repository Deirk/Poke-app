import styles from '../styles/PokemonDetailsCard.module.css';

interface PokemonDetailsCardProps {
  title: string;
  children: React.ReactNode;
}

export const PokemonDetailsCard = ( { title, children }: PokemonDetailsCardProps ) => {
  return (
    <div className={ styles.pokemonDetailsCard }>
      <p className={ styles.pokemonDetailsCardTitle }>{ title }</p>
      <div className={ styles.pokemonDetailsCardContent }>
        { children }
      </div>
    </div>
  );
};