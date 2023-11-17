import { configureStore } from '@reduxjs/toolkit';
import { pokemonsApi } from '../services/api';
import pageSlice from './page-slice';
import loaderSlice from './loader-slice';
import pokelistSlice from './pokeList-slice';

const store = configureStore({
  reducer: {
    pagination: pageSlice.reducer,
    loading: loaderSlice.reducer,
    pokelist: pokelistSlice.reducer,
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
});

export default store;
