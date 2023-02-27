import React from "react";
import styled from "styled-components";

const Header = () => {
	return (
		<Head>
			<h1>Welcome!</h1>
		</Head>
	);
};

const Head = styled.div`
	position: fixed;
	width: 100%;
	height: 50px;
	top: 0;
	left: 0;
	border-bottom: 2px solid #eee;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	h1 {
		padding-left: 20px;
		font-weight: bold;
		font-size: 20px;
		color: #4b4b4b;
	}
`;

export default Header;
