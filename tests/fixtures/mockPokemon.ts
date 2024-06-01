import { PokemonData, PokemonsResponse } from '../../src/interfaces';

export const mockSinglePokemonResponse = {
  id: 1,
  name: "bulbasaur",
  weight: 69
};

export const mockPokemonsResponse: PokemonsResponse = {
  count: 6,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/"
    },
  ]
};

export const mockPokemonsPaginationResponse: PokemonsResponse = {
  count: 6,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  results: [
    {
      name: "weedle",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      name: "kakuna",
      url: "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      name: "kakuna",
      url: "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      name: "metapod",
      url: "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      name: "metapod",
      url: "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon/6/"
    },
  ]
};

export const mockPokemonList = [
  { id: '1', name: 'bulbasaur' },
  { id: '2', name: 'ivysaur' },
  { id: '3', name: 'venusaur' },
  { id: '4', name: 'charmander' },
  { id: '5', name: 'charmeleon' },
  { id: '6', name: 'charizard' }
];

export const mockPokemonData: PokemonData = {
  actualPage: 1,
  totalPages: 1,
  pokemons: mockPokemonList,
  nextPage: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previousPage: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
};

export const mockPokemonSuggestions: String[] = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard'
];