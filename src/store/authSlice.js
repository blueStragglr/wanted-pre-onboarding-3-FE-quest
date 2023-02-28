import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logIn: state => {
			console.log("in!");
			state.isLoggedIn = true;
			localStorage.setItem("isLoggedIn", true);
		},
		logOut: state => {
			console.log("out!");
			state.isLoggedIn = false;
			localStorage.removeItem("isLoggedIn");
		},
	},
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
