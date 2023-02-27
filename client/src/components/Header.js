import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link, useHref, useNavigate } from 'react-router-dom';
import { eraseCookie, getCookie } from '../utils/common';

const HeaderSC = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 22px 48px;
	border-bottom: 1px solid lightgray;
`;

const TitleSC = styled.h1`
	font-size: 20px;
`;

const btnStyle = css`
	padding: 8px 16px;
	color: white;
	font-weight: 600;
	border: none;
	border-radius: 6px;
	cursor: pointer;
`;

const SignInBtnSC = styled.button`
	${btnStyle}
	background-color: lightblue;
`;

const SignOutBtnSC = styled.button`
	${btnStyle}
	background-color: tomato;
`;

const Header = (props) => {
	const isSignedIn = getCookie('jwt');
	const navigate = useNavigate();
	const href = useHref();

	const signOut = () => {
		eraseCookie('jwt');
		navigate('/');
	};

	const signIn = useCallback(() => {
		const url = encodeURIComponent(href);

		navigate(`/signin?url=${url}`);
	}, [href, navigate]);

	return (
		<HeaderSC>
			<TitleSC>
				<Link to='/'>Wanted Pre-onboarding course</Link>
			</TitleSC>
			{isSignedIn ? (
				<SignOutBtnSC onClick={signOut}>Sign out</SignOutBtnSC>
			) : (
				<SignInBtnSC onClick={signIn}>Sign In</SignInBtnSC>
			)}
		</HeaderSC>
	);
};

Header.propTypes = {};

export default Header;
