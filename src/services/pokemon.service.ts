import { API_URL } from '../config/constants/constants';
import { httpClientPlugin } from '../config/plugins/http-client.plugin';
import { Pokemon, PokemonData, PokemonsResponse, SimplePokemon } from '../interfaces';


export class PokemonService {

  private static getActualPage (path: string) {
    const query = path.split( 'pokemon?' ).at( 1 )?.split('&')!;
    const actualPage = query.find( item => item.includes( 'offset=' ) )?.split('=').at(1);
    return Number(actualPage)/20;
 }

  static getPokemons = async ( pathName: string = `${API_URL}pokemon?limit=20&offset=0` ): Promise<PokemonData> => {
    const data: PokemonsResponse = await httpClientPlugin.get( pathName );

    const pokemons: SimplePokemon[] = data.results.map( pokemon => ( {
      id: pokemon.url.split( '/' ).at( -2 )!,
      name: pokemon.name
    } ) );

    const totalPages = (data.count / 20).toFixed(0);
    const actualPage = this.getActualPage(pathName);


    return {
      pokemons: pokemons,
      actualPage: Number(actualPage) + 1,
      totalPages: Number(totalPages),
      nextPage: data.next,
      previousPage: data.previous,
    };
  };

  static getPokemonsSuggestions = async (): Promise<string[]> => {
    if (localStorage.getItem('suggestions')) {
      const data = JSON.parse(localStorage.getItem('suggestions')!);
      return data.suggestions;
    }

    const data: PokemonsResponse = await httpClientPlugin.get( 'pokemon?limit=10000&offset=0' );
    const suggestions: string[] = data.results.map( pokemon => pokemon.name);

    localStorage.setItem('suggestions', JSON.stringify({suggestions}));
    return suggestions;
  }

  static getPokemonById = async ( name: string ): Promise<Pokemon> => {
    const data: Pokemon = await httpClientPlugin.get( `${API_URL}pokemon/${name}` );

    console.log(data);

    return data;
  }
}