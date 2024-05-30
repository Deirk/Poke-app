import styles from './styles/AuthError.module.css';

interface AuthErrorProps {
  message: string;
  icon: JSX.Element;
}

export const AuthError = ( { message, icon }: AuthErrorProps ) => {
  return (
    <div className={styles.AuthError}>
      <span>
        <b>Error: </b>
        { message }
      </span>
      { icon }
    </div>
  );
};