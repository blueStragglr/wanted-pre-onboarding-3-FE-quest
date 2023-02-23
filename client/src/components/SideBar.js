import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
const NavListItemSC = styled(Link)`
	padding: 12px 0;
	font-size: 20px;
`;

const PAGES = [
	{ path: '/page/1', name: 'PAGE A' },
	{ path: '/page/2', name: 'PAGE B' },
	{ path: '/page/3', name: 'PAGE C' },
	{ path: '/page/4', name: 'PAGE D' },
];

const SideBar = (props) => {
	return (
		<SideBarSC>
			<NavListSC>
				{PAGES.map((v, i) => (
					<NavListItemSC
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
