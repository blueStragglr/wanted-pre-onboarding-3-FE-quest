import { createSlice } from "@reduxjs/toolkit";
import { IStore } from "../../../store/types/store";

const initialLoginState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export const selectIsLogin = (state: IStore) => state.login.isLogin;
export default loginSlice.reducer;
