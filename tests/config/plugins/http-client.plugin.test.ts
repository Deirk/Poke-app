import { httpClientPlugin } from '../../../src/config/plugins/http-client.plugin';

describe( 'config/plugins/http-client.plugin.ts test', () => {

  test( 'httpClientPlugin.get() should return an object', async () => {

    const data = await httpClientPlugin.get( 'https://jsonplaceholder.typicode.com/todos/1' );

    expect( data ).toBeInstanceOf( Object );
    expect( data ).toEqual( {
      userId: expect.any( Number ),
      id: expect.any( Number ),
      title: expect.any( String ),
      completed: expect.any( Boolean )
    } );

  } );

} );