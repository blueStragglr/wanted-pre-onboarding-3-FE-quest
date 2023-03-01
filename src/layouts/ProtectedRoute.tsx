import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const ProtectedRoute = () => {
	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default ProtectedRoute;
