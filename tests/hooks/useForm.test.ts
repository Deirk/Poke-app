import { renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';
import { act } from 'react';

describe( 'hooks/useForm.ts test', () => {

  const initialForm = {
    name: 'Test',
    email: 'test@test.com'
  };

  test( 'Must return initalState', () => {

    const { result } = renderHook( () => useForm( initialForm ) );
    expect( result.current ).toEqual( {
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      handleChange: expect.any( Function ),
      setFormState: expect.any( Function ),
    } );
  } );

  test( 'Form name must change', () => {

    const newValue = 'Juan';
    const { result } = renderHook( () => useForm( initialForm ) );
    const { handleChange } = result.current;

    const event = {
      target: { name: 'name', value: newValue }
    } as React.ChangeEvent<HTMLInputElement>;

    act( () => {
      handleChange(event);
    } );

    expect( result.current.name ).toBe( newValue );
    expect( result.current.formState.name ).toBe( newValue );

  } );

  test( 'Form email must change', () => {

    const newValue = 'test1@test.com';
    const { result } = renderHook( () => useForm( initialForm ) );
    const { handleChange } = result.current;

    const event = {
      target: { name: 'email', value: newValue }
    } as React.ChangeEvent<HTMLInputElement>;

    act( () => {
      handleChange(event);
    } );

    expect( result.current.email ).toBe( newValue );
    expect( result.current.formState.email ).toBe( newValue );

  } );


} );