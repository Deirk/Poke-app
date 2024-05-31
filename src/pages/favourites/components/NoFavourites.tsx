import { IoHeartOutline } from 'react-icons/io5';
import styles from '../styles/NoFavourites.module.css';

export const NoFavorites = () => {
  return (
    <div className={styles.noFavourites}>
      <IoHeartOutline className={styles.noFavouritesIcon} />
      <span className={styles.noFavouritesText}>No hay favoritos</span>
    </div>
  );
};
