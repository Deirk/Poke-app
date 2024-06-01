import { act, renderHook } from '@testing-library/react';
import { useAuthStore } from '../../../../src/config/stores/auth/auth.store';
import { mockUser } from '../../../fixtures/testUser';

const initialState = {
  status: 'unauthorized',
  token: undefined,
  user: undefined,
};

const originalState = useAuthStore.getState();

describe( 'config/stores/auth/auth.store.ts test', () => {

  beforeEach( () => {
    useAuthStore.setState( originalState );
  } );

  test( 'Must be initial state', () => {
    const { result } = renderHook( () => useAuthStore() );
    expect( result.current ).toMatchObject( {
      ...initialState,
      loginUser: expect.any( Function ),
      logoutUser: expect.any( Function ),
    } );
  } );

  test( 'LoginUser must had user data', async () => {
    const { result } = renderHook( () => useAuthStore() );

    await act( () => result.current.loginUser( mockUser.email, mockUser.password ) );
    expect( result.current ).toMatchObject( {
      status: 'authorized',
      token: expect.any( String ),
      user: {
        id: expect.any( String ),
        token: expect.any( String ),
        user: expect.any( String ),
      }
    } );
  } );

  test( 'LoginUser must return an error', async () => {
    try {

      const { result } = renderHook( () => useAuthStore() );
      await act( () => result.current.loginUser( mockUser.email, "123123" ) );

    } catch ( error ) {

      expect( error ).toBeDefined();
      expect( error ).toBeInstanceOf( Error );

    }
  } );

  test( 'LogoutUser must had initial state', async () => {
    const { result } = renderHook( () => useAuthStore() );

    await act( () => result.current.loginUser( mockUser.email, mockUser.password ) );
    await act( () => result.current.logoutUser() );
    expect( result.current ).toMatchObject( initialState );
  } );

} );