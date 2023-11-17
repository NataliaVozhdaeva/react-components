import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialStateOfPokelist = {
  pokeList: [],
  isOpen: false,
};

const pokelistSlice = createSlice({
  name: 'Poke-list',
  initialState: initialStateOfPokelist,
  reducers: {
    openDetails(state) {
      state.isOpen = !state.isOpen;
    },
    replaceCards(state, action: PayloadAction<[]>) {
      state.pokeList = action.payload;
    },
  },
});

export const pokeListActions = pokelistSlice.actions;
export default pokelistSlice;
