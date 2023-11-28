import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./page-slice";
import loaderSlice from "./loader-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    pagination: pageSlice.reducer,
    loading: loaderSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
