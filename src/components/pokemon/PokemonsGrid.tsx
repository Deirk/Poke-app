
import styles from './styles/PokemonsGrid.module.css';

import { PokemonCard } from './PokemonCard';
import { Pagination } from '../navigation/pagination/Pagination';
import { usePokemonService } from '../../hooks/usePokemonService';

export const PokemonsGrid = () => {
  const { pokemons, actualPage, totalPages, handleUsePagination } = usePokemonService();

  return (
    <>
      <div className={ styles.PokemonsGrid }>
        {
          pokemons?.map( pokemon => <PokemonCard key={ pokemon.id } pokemon={ pokemon } /> )
        }
      </div>
      <Pagination
        currentPage={ actualPage }
        totalPages={ totalPages }
        handleUsePagination={ handleUsePagination } />
    </>
  );
};
