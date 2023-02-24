import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const SignInBtnSC = styled(Link)`
	padding: 8px 16px;
	background-color: tomato;
	color: white;
	font-weight: 600;
	border: none;
	border-radius: 6px;
`;

const Header = (props) => {
	return (
		<HeaderSC>
			<TitleSC>
				<Link to='/'>Wanted Pre-onboarding course</Link>
			</TitleSC>
			<SignInBtnSC to='/signin'>Sign In</SignInBtnSC>
		</HeaderSC>
	);
};

Header.propTypes = {};

export default Header;
