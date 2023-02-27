import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const LayoutSC = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;
const MainSC = styled.main`
	display: flex;
	flex: 1;
`;
const ContentsSC = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding: 36px;
	font-size: 24px;
	font-weight: 600;
	color: tomato;
	background-color: beige;
`;

const MainLayout = ({ children }) => {
	return (
		<LayoutSC>
			<Header />
			<MainSC>
				<SideBar />
				<ContentsSC>{children}</ContentsSC>
			</MainSC>
		</LayoutSC>
	);
};

MainLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default MainLayout;
