import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContainerLayout from '../layouts/ContainerLayout';
import SignInForm from '../components/form/SignInForm';
import { getCookie } from '../utils/common';
import { useNavigate } from 'react-router';

const FormContainerSC = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const SignIn = (props) => {
	const navigate = useNavigate();

	useEffect(() => {
		const isSignedIn = getCookie('jwt');

		if (isSignedIn) navigate('/');
	}, [navigate]);

	return (
		<ContainerLayout>
			<FormContainerSC>
				<SignInForm />
			</FormContainerSC>
		</ContainerLayout>
	);
};

SignIn.propTypes = {};

export default SignIn;
