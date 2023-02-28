import React from "react";
import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logIn } from "../store/authSlice";
import Content from "../ui/Content";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const clickHandler = e => {
		e.preventDefault();
		dispatch(logIn());
		navigate("/");
	};

	return (
		<Wrapper onSubmit={clickHandler}>
			<h2>LogIn</h2>
			<InputContainer>
				<h4>E-mail</h4>
				<label />
				<input />
			</InputContainer>
			<InputContainer>
				<h4>Password</h4>
				<label />
				<input />
			</InputContainer>
			<button type="submit">Submit</button>
		</Wrapper>
	);
};

const Wrapper = styled.form`
	width: 500px;
	height: 400px;
	border: 2px solid #4b4b4b;
	border-radius: 15px;
	grid-area: content;
	margin: 0 auto;
	position: relative;
	top: 100px;
	h2 {
		margin: 30px 0 80px 0;
		font-size: 60px;
		text-align: center;
	}
	button {
		position: absolute;
		width: 200px;
		height: 50px;
		right: 40px;
		font-size: 40px;
	}
`;

const InputContainer = styled.div`
	width: 400px;
	text-align: center;
	display: flex;
	justify-content: space-between;
	margin: 40px;
	h4 {
		font-size: 40px;
	}
	input {
		width: 100px;
	}
`;

export default Login;
