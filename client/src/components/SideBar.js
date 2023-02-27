import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SideBarSC = styled.aside`
	width: 240px;
	min-height: 100%;
	padding: 36px 48px;
`;

const NavListSC = styled.ul`
	display: flex;
	flex-direction: column;
	height: 100%;
`;
const NavListItemSC = styled(NavLink)`
	padding: 12px 0;
	font-weight: 500;

	&.active {
		color: tomato;
		font-weight: 700;
	}
`;

const PAGES = [
	{ path: '/a', name: 'PAGE A' },
	{ path: '/b', name: 'PAGE B' },
	{ path: '/c', name: 'PAGE C' },
];

const SideBar = (props) => {
	return (
		<SideBarSC>
			<NavListSC>
				{PAGES.map((v, i) => (
					<NavListItemSC
						className={({ isActive }) => (isActive ? 'active' : '')}
						to={v.path}
						key={v.name}
					>
						{v.name}
					</NavListItemSC>
				))}
			</NavListSC>
		</SideBarSC>
	);
};

SideBar.propTypes = {};

export default SideBar;
