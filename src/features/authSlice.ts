import { createSlice } from "@reduxjs/toolkit";

interface InitailState {
  username: string;
  id: string;
}

const initialState: InitailState = {
  username: "",
  id: "",
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    signIn: (state, action) => {},
    signOut: (state, action) => {},
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
