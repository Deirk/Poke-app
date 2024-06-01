import { API_URL } from '../../../src/config/constants/constants';

describe( 'config/constants/constants.ts test', () => {

  const ORIG_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ORIG_ENV }
  })

  afterEach(() => {
    process.env = ORIG_ENV
  })

  test( 'API_URL must be string', () => {
    expect( typeof API_URL ).toBe( 'string' );
  } );
  test( 'API_URL must be equal to process.env.API.URL', () => {
    expect( API_URL ).toBe( process.env.BASE_URL );
  } );

} );

