import API_PATH from './constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, FetchBody } from './interfaces';

const base = API_PATH;

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base }),
  endpoints: (builder) => ({
    getPokeList: builder.query<FetchBody, string>({
      query: () => '',
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetPokeListQuery, useGetPokemonByNameQuery } = pokemonsApi;
/* const getResource = async (url: string | undefined) => {
  if (!url) url = '';
  const res = await fetch(`${base}${url}`);

  if (!res.ok) {
    throw new Error('error');
  }
  return res.json();
}; 


const getDetails = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('We havent got any details');
  }
  return res.json();
};

const search = async (term: string) => {
  const res = await fetch(`${base}${term}`);

  if (!res.ok) {
    throw new Error("we haven't got this pokemon");
  }
  return res.json();
}; */
