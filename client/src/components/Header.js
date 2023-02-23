import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderSC = styled.header`
	padding: 22px 48px;
	border-bottom: 1px solid lightgray;
`;

const TitleSC = styled.h1`
	font-size: 24px;
`;

const Header = (props) => {
	return (
		<HeaderSC>
			<TitleSC>Wanted Pre-onboarding course</TitleSC>
		</HeaderSC>
	);
};

Header.propTypes = {};

export default Header;
