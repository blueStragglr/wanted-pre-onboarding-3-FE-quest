import { redirect } from "react-router-dom";

export const Loader = () => {
	const isLoggedIn = localStorage.getItem("isLoggedIn");

	if (!isLoggedIn) return redirect("/login");

	return null;
};

export const OutLoader = () => {
	const isLoggedIn = localStorage.getItem("isLoggedIn");
	if (isLoggedIn) return redirect("/");
	return null;
};
