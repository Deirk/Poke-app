import { TypeHead } from '../../components/typehead/TypeHead';
import styles from "./styles/Home.module.css";
import { PokemonsGrid } from '../../components/pokemon/PokemonsGrid';

export const Home = () => {
  return (
    <div className={ styles.homeConent }>
      <TypeHead />
      <PokemonsGrid />
    </div>
  );
};