import { configureStore } from '@reduxjs/toolkit';
import hookFormSlice from './hookForm-slice';

const store = configureStore({
  reducer: {
    search: hookFormSlice.reducer,
  },
});

export default store;
