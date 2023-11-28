import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialStateOfPagination = {
  currentPage: 1,
  limit: 9,
};

const pageSlice = createSlice({
  name: "Pagination",
  initialState: initialStateOfPagination,
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

export const pageActions = pageSlice.actions;
export default pageSlice;
