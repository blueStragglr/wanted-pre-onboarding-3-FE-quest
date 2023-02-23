import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideBarSC = styled.aside`
	width: 240px;
	height: 100%;
	padding: 36px 48px;
`;

const SideBar = (props) => {
	return <SideBarSC>SideBar</SideBarSC>;
};

SideBar.propTypes = {};

export default SideBar;
