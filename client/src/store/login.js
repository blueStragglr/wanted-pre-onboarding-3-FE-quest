import { createSlice } from "@reduxjs/toolkit";

const initialLogin = {
  username: "",
  password: "",
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLogin,
  reducers: {
    login(state, action) {
      state.isLogin = action.payload;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
