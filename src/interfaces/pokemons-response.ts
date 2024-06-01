import { SimplePokemon } from './simple-pokemon';

export interface PokemonData {
  pokemons: SimplePokemon[],
  totalPages: number,
  actualPage: number,
  nextPage: string | null,
  previousPage: string | null,
}

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
