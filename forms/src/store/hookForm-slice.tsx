import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IFormFields from '../intefaces';

const initialStateOfForm = {
  name: '',
  password: '',
  passwordCheck: '',
  age: 18,
  email: '',
  checkbox: false,
  country: '',
};

const hookFormSlice = createSlice({
  name: 'HookForm',
  initialState: initialStateOfForm,
  reducers: {
    changeData(state, action: PayloadAction<IFormFields>) {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.passwordCheck = action.payload.passwordCheck;
      state.age = action.payload.age;
      state.email = action.payload.email;
      state.checkbox = action.payload.checkbox;
      state.country = action.payload.country;
    },
  },
});

export const hookFormActions = hookFormSlice.actions;
export default hookFormSlice;
