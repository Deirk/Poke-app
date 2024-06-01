import { UserType } from '../../src/config/stores/auth/interfaces/user.interface';
import { AuthService } from '../../src/services/auth.service';
import { mockUser } from '../config/fixtures/testUser';

describe( 'services/auth.service.ts test', () => {
  afterEach( () => {
    jest.restoreAllMocks();
  } );

  beforeEach( () => {
    jest.restoreAllMocks();
  } );

  test( 'AuthServoce must return an user', () => {
    const user = AuthService.login( mockUser.email, mockUser.password );

    expect( user ).toBeInstanceOf( Object );
    expect( user ).toMatchObject<UserType>( {
      id: expect.any( String ),
      token: expect.any( String ),
      user: expect.any( String ),
    } );

  } );

} );