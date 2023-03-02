import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    signIn: (state, action: PayloadAction<InitailState>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    signOut: () => {
      return initialState;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
