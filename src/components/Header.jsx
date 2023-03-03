import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="text-xl font-bold px-8 h-[4rem] border-b-2 flex items-center justify-between">
			<h1>Wanted Pre-onboarding course</h1>
			<Link
				to="/login"
				className="bg-blue-500 text-white rounded-md px-4 py-2 transition hover:bg-blue-500/50"
			>
				Login
			</Link>
		</header>
	);
};

export default Header;
