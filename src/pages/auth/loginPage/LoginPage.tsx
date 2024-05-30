import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiErrorCircle } from 'react-icons/bi';

import styles from './styles/LoginPage.module.css';
import { AuthError, AuthInput } from '../components';
import { useAuthStore } from '../../../config/stores';
import { useForm } from '../../../shared/hooks/useForm';

interface LoginFormData {
  email: string;
  password: string;
  error: boolean;
  errorMessage: string;
}

const initialFormState: LoginFormData = {
  email: '',
  password: '',
  error: false,
  errorMessage: '',
};

export const LoginPage = () => {
  const { formState, handleChange, setFormState } = useForm<LoginFormData>( initialFormState );

  const navigate = useNavigate();
  const loginUser = useAuthStore( state => state.loginUser );

  const onSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const { email, password } = event.target as HTMLFormElement;

    try {
      await loginUser( email.value, password.value );
      navigate( '/' );
    } catch ( error ) {
      if ( error instanceof Error ) {
        setFormState( {
          ...formState,
          error: true,
          errorMessage: error.message,
        } );
      }
    }

  };


  return (
    <>
      <div className={ styles.LoginPageCard }>
        <div className={ styles.LoginTitleContainer }>
          <h1 className={ styles.LoginTitle }>Poke App</h1>
          <h2 className={ styles.LoginSubtitle }>Login</h2>
        </div>
        <form onSubmit={ onSubmit }>
          { formState.error && <AuthError message={ formState.errorMessage } icon={ <BiErrorCircle /> } /> }
          <AuthInput
            label='Email'
            name='email'
            value={ formState.email }
            type='email'
            placeholder='Enter your email'
            handleChange={ handleChange }
          />
          <AuthInput
            label='Password'
            name='password'
            value={ formState.password }
            type='password'
            placeholder='Enter your password'
            handleChange={ handleChange }
          />
          <div className={ styles.LoginButtonContainr }>
            <button className={ styles.LoginButton } type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};