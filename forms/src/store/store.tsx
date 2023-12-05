import { configureStore } from '@reduxjs/toolkit';
import hookFormSlice from './hookForm-slice';

const store = configureStore({
  reducer: {
    dataHook: hookFormSlice.reducer,
  },
});

export default store;
