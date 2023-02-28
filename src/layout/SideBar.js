import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import A from "../pages/A";

const SideBar = () => {
	return (
		<Side>
			<Link to={"A"}>page A</Link>
			<Link to={"B"}>page B</Link>
			<Link to={"C"}>page C</Link>
		</Side>
	);
};

const Side = styled.div`
	grid-area: sidebar;
	height: 100vh;
	border-right: 2px solid #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	a {
		position: relative;
		top: 20px;
		padding: 20px 0;
		font-size: 20px;
		color: #4b4b4b;
		text-decoration: none;
	}
`;

export default SideBar;
