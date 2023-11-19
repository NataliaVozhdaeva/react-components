import API_PATH from './constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, FetchBody } from './interfaces';

const base = API_PATH;

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base }),
  endpoints: (builder) => ({
    getPokeList: builder.query<FetchBody, string>({
      query: (name) => `${name}`,
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetPokeListQuery, useGetPokemonByNameQuery } = pokemonsApi;
