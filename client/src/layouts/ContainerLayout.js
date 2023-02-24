import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutSC = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const ContainerSC = styled.div`
	max-width: 1200px;
`;

const ContainerLayout = ({ children }) => {
	return (
		<LayoutSC>
			<ContainerSC>{children}</ContainerSC>
		</LayoutSC>
	);
};

ContainerLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default ContainerLayout;
