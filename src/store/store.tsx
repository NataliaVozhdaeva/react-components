import { configureStore } from '@reduxjs/toolkit';
import pageSlice from './page-slice';
import loaderSlice from './loader-slice';

const store = configureStore({
  reducer: {
    pagination: pageSlice.reducer,
    loading: loaderSlice.reducer,
  },
});

export default store;
