import styles from '../styles/PaginationButton.module.css';
import { PaginationActions } from '../../../../hooks';

interface PaginationButtonProps {
  handleUsePagination: ( action: PaginationActions ) => void;
  paginationAction: PaginationActions;
  icon: JSX.Element;
}

export const PaginationButton = ( { handleUsePagination, paginationAction, icon }: PaginationButtonProps ) => {
  return (
    <div className={ styles.paginationButton }
      onClick={ () => handleUsePagination( paginationAction ) }
    >{
        icon
      }</div>
  );
};