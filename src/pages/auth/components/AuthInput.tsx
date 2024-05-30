import styles from './styles/AuthInput.module.css';

interface AuthInputProps {
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthInput = ( { label, name, value, type, placeholder = '', handleChange }: AuthInputProps ) => {
  return (
    <div className={styles.AuthInputContainer}>
      <label className={styles.AuthInputLabel}>{ label }</label>
      <input
        className={styles.AuthInput}
        placeholder={ placeholder }
        type={ type }
        value={ value }
        name={ name }
        onChange={handleChange}
      />
    </div>
  );
};