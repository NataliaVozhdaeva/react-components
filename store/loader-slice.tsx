import { createSlice } from "@reduxjs/toolkit";

const initialStateOfLoader = {
  isFetching: true,
};

const loaderSlice = createSlice({
  name: "Loader",
  initialState: initialStateOfLoader,
  reducers: {
    loaderToggler(state) {
      {
        state.isFetching = !state.isFetching;
      }
    },
  },
});

export const loaderAction = loaderSlice.actions;
export default loaderSlice;
