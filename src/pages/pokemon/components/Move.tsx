import styles from '../styles/Move.module.css';

interface MoveProps {
  move: string;
}

export const Move = ( { move }: MoveProps ) => {
  return (
    <p className={styles.move}>{ move }</p>
  );
};