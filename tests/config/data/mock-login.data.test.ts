import { mockAuthLoginService } from '../../../src/config/data/mock-login.data';
import { UserType } from '../../../src/config/stores/auth/interfaces/user.interface';
import { fieldRequiredError, invalidFieldError } from '../../fixtures/authError';
import { mockUser } from '../../fixtures/testUser';

describe( 'config/data/mock-login.data.ts test', () => {

  test( 'Must throw an error if password is not defined', () => {

    try {
      mockAuthLoginService( mockUser.email, '' );
    } catch ( error ) {

      expect( error ).toBeDefined();
      if ( error instanceof Error ) {
        expect( error.message ).toBe( fieldRequiredError );
      }
    }
  } );

  test( 'Must throw an error if email is not defined', () => {

    try {
      mockAuthLoginService( '', mockUser.password );
    } catch ( error ) {

      expect( error ).toBeDefined();
      if ( error instanceof Error ) {
        expect( error.message ).toBe( fieldRequiredError );
      }
    }
  } );

  test( 'Must throw an error if password is not defined', () => {

    try {
      mockAuthLoginService( mockUser.email, 'Test123123' );
    } catch ( error ) {
      expect( error ).toBeDefined();
      if ( error instanceof Error ) {
        expect( error.message ).toBe( invalidFieldError );
      }
    }
  } );

  test( 'Must throw an error if email is not defined', () => {

    try {
      mockAuthLoginService( 'email@wrong.com', mockUser.password );
    } catch ( error ) {
      expect( error ).toBeDefined();
      if ( error instanceof Error ) {
        expect( error.message ).toBe( invalidFieldError );
      }
    }
  } );

  test( 'Must return a User', () => {
    const user = mockAuthLoginService( mockUser.email, mockUser.password );

    expect( user ).toBeInstanceOf( Object );
    expect( user ).toMatchObject<UserType>( {
      id: expect.any( String ),
      token: expect.any( String ),
      user: expect.any( String ),
    } );

  } );

} );