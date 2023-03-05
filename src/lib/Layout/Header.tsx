import { css } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactNode } from "react";

export function Header() {
	const locationNow = useLocation();

	return (
		<div
			css={css`
				max-width: 1200px;
				width: 100%;
				padding: 0;
				margin: 0;
				height: 30px;
				display: flex;
				justify-content: center;
				border-bottom: 2px solid black;
			`}
		>
			<div
				css={css`
					padding: 0;
					margin: 0;
					min-width: 200px;
					display: flex;
					justify-content: space-between;
				`}
			>
				<NavLink to="/">A</NavLink>
				<NavLink to="/B">B</NavLink>
				<NavLink to="/C">C</NavLink>
			</div>
		</div>
	);
}
