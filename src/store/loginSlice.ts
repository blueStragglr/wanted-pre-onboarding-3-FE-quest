import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Login {
  id: string;
  password: string;
  loginStatus: boolean;
}

const initialState: Login = {
  id: "",
  password: "",
  loginStatus: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ id: string; password: string }>) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.loginStatus = true;
    },
    logout(state) {
      state.id = "";
      state.password = "";
      state.loginStatus = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
