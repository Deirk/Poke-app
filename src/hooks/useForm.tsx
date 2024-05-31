import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>( initialState: T ) => {

  const [ formState, setFormState ] = useState( initialState );

  const handleChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormState( {
      ...formState,
      [ name ]: value,
    } );
  };

  return {
    ...formState,
    formState,
    handleChange,
    setFormState,
  };
};