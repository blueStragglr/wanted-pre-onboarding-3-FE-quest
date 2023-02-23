import { configureStore, createSlice } from '@reduxjs/toolkit';

export const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    id: '',
    password: '',
    isLogin: false,
  },
  reducers: {
    isLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    login: LoginSlice.reducer,
  },
});

export const { isLogin } = LoginSlice.actions;
