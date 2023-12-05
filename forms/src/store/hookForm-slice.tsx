import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {IFormFields} from '../intefaces';
import store from './store';

const countries = ['Krakozia', 'Tilimilitryamdiya']

const initialStateOfForm: IFormFields = {
  name: '',
  password: '',
  passwordCheck: '',
  age: 18,
  email: '',
  countries: countries,
  country:''
};

const hookFormSlice = createSlice({
  name: 'HookForm',
  initialState: initialStateOfForm,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    updateAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    updatePasswordDub: (state, action: PayloadAction<string>) => {
      state.passwordCheck = action.payload
    },
    updateCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload
    },
    updateCountries: (state, action: PayloadAction<string[]>) => {
      state.countries = action.payload
    },
    },
  });

  export type RootState = ReturnType<typeof store.getState>

export const {
  updateName,
  updateAge,
  updateEmail,
  updatePassword,
  updatePasswordDub,
  updateCountry,
  updateCountries,
} = hookFormSlice.actions;

export default hookFormSlice;
