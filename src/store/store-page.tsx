import { createSlice, configureStore } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialStateOfPagintion = {
  currentPage: 1,
  limit: 20,
};

const pageSlice = createSlice({
  name: 'Pagination',
  initialState: initialStateOfPagintion,
  reducers: {
    pagePlus(state) {
      {
        state.currentPage++;
      }
    },
    pageMinus(state) {
      {
        state.currentPage--;
      }
    },
    changeLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
  },
});

const pageStore = configureStore({
  reducer: pageSlice.reducer,
});

export const pageActions = pageSlice.actions;
export default pageStore;
