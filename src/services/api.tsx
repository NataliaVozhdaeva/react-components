import API_PATH from './constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBody } from './interfaces';

const base = API_PATH;

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base }),
  endpoints: (builder) => ({
    getPokeList: builder.query<FetchBody, string>({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetPokeListQuery } = pokemonsApi;
