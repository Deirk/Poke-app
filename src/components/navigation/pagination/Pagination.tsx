import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

import { PaginationActions } from '../../../hooks/usePokemonService';
import { PaginationButton } from './components/PaginationButton';

import styles from './styles/Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleUsePagination: ( actions: PaginationActions ) => void;
}

export const Pagination = ( { currentPage, totalPages, handleUsePagination }: PaginationProps ) => {

  return (
    <div className={ styles.paginationContainer }>
      <PaginationButton
        handleUsePagination={ handleUsePagination }
        paginationAction={ PaginationActions.PREVIOUS_PAGE }
        icon={ <BsCaretLeftFill /> } />
      <div className={styles.paginationPageCounter}>{ `${ currentPage } / ${ totalPages }` }</div>
      <PaginationButton
        handleUsePagination={ handleUsePagination }
        paginationAction={ PaginationActions.NEXT_PAGE }
        icon={ <BsCaretRightFill /> } />
    </div>
  );
};