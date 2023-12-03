import { configureStore } from '@reduxjs/toolkit';
import { pokemonsApi } from '../services/api';
import pageSlice from './page-slice';
import loaderSlice from './loader-slice';
import searchSlice from './search-slice';

const store = configureStore({
  reducer: {
    pagination: pageSlice.reducer,
    loading: loaderSlice.reducer,
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
    search: searchSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
});

export default store;
