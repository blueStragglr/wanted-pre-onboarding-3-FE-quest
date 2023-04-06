import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logOut } from "../store/authSlice";

const Header = () => {
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const clickHandler = () => {
		dispatch(logOut());
		navigate("/");
	};

	return (
		<Head>
			<Link to={"/"} className={"logo"}>
				Welcome!
			</Link>
			{isLoggedIn ? (
				<LogButton onClick={clickHandler}>LogOut</LogButton>
			) : (
				<Link to={"/login"}>
					<LogButton>LogIn</LogButton>
				</Link>
			)}
		</Head>
	);
};

const Head = styled.div`
	grid-area: header;
	border-bottom: 2px solid #eee;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	.logo {
		padding-left: 20px;
		font-weight: bold;
		font-size: 20px;
		color: #4b4b4b;
		font-size: 30px;
	}
`;

const LogButton = styled.button`
	width: 100px;
	height: 40px;
	background-color: #fff;
	border: 1px solid #222;
	border-radius: 10px;
	margin-left: 30px;
`;

export default Header;
