import React from 'react';
import PropTypes from 'prop-types';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const WrapperSC = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	font-weight: 600;
`;

const RootBoundary = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return <WrapperSC>This page doesn't exist!</WrapperSC>;
		}

		if (error.status === 401) {
			return <WrapperSC>You aren't authorized to see this</WrapperSC>;
		}

		if (error.status === 503) {
			return <WrapperSC>Looks like our API is down</WrapperSC>;
		}

		if (error.status === 418) {
			return <WrapperSC>🫖</WrapperSC>;
		}
	}

	return <WrapperSC>Something went wrong</WrapperSC>;
};

export default RootBoundary;
