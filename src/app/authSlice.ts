import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    id: '',
    pw: '',
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
    },
    logout: (state) => {
      state.id = '';
      state.pw = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
