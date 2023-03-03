import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

const Root = () => {
	return (
		<Fragment>
			<Header />
			<Sidebar />
			<div>
				<Outlet />
			</div>
		</Fragment>
	);
};

export default Root;
