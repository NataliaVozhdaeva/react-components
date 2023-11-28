import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialStateOfSearch = {
  term: "",
};

const searchSlice = createSlice({
  name: "Search",
  initialState: initialStateOfSearch,
  reducers: {
    changeTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
