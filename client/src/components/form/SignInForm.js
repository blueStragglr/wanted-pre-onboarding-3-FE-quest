import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { setCookie } from '../../utils/common';

const FormContainerSC = styled.div``;

const TitleSC = styled.h1`
	font-size: 20px;
	margin-bottom: 16px;
`;

const FormSC = styled.form`
	display: flex;
	flex-direction: column;
	min-width: 600px;
	padding: 24px 36px 36px;
	border: 2px solid lightgray;
	border-radius: 8px;
`;

const FormHeaderSC = styled.header`
	margin-bottom: 24px;

	h1 {
		font-size: 28px;
		font-weight: 700;
	}
`;

const FieldSectionSC = styled.section`
	display: flex;
	align-items: center;
	margin: 24px 0;
	font-size: 18px;

	label {
		width: 35%;
		margin-right: 12px;
		font-weight: 500;
	}
	input {
		flex: 1;
		padding: 12px 24px;
		border: 1px solid lightgray;
		border-radius: 4px;
	}
`;

const FormActionFieldSC = styled.section`
	display: flex;
	justify-content: flex-end;
	margin-top: 36px;

	input {
		padding: 8px 16px;
		background-color: tomato;
		color: white;
		font-weight: 600;
		border: none;
		border-radius: 6px;
		cursor: pointer;
	}
`;

const FIELDS = [
	{ type: 'text', name: 'userName', label: 'User Name' },
	{ type: 'password', name: 'password', label: 'Password' },
];

const SignInForm = (props) => {
	const location = useLocation();
	const searchParams = useMemo(
		() => new URLSearchParams(location.search),
		[location.search]
	);
	const navigate = useNavigate();

	const [signInFormData, setSignInFormData] = useState({
		userName: '',
		password: '',
	});

	const formDataHandler = (event, key) => {
		const value = event.target.value;

		setSignInFormData({ ...signInFormData, [key]: value });
	};

	const submitForm = useCallback(
		(e) => {
			e.preventDefault();

			// 값 유효성 체크 필요

			// 로그인 요청

			// 요청 완료 후 jwt 쿠키 저장 & 이전 페이지 이동
			setCookie('jwt', 'foo', 90);

			const hasRedirectURL = searchParams.has('url');
			const url = hasRedirectURL
				? decodeURIComponent(searchParams.get('url'))
				: '/';

			navigate(url);
		},
		[searchParams, navigate]
	);

	return (
		<FormContainerSC>
			<TitleSC>
				<Link to='/'>Wanted Pre-onboarding course</Link>
			</TitleSC>

			<FormSC onSubmit={submitForm}>
				<FormHeaderSC>
					<h1>Sign In</h1>
				</FormHeaderSC>

				{FIELDS.map((v) => {
					return (
						<FieldSectionSC key={v.name}>
							<label htmlFor={v.name}>{v.label}</label>
							<input
								type={v.type}
								name={v.name}
								id={v.name}
								value={signInFormData[v.name]}
								onChange={(event) => formDataHandler(event, v.name)}
								required
							/>
						</FieldSectionSC>
					);
				})}

				<FormActionFieldSC>
					<input
						type='submit'
						value='Submit'
					/>
				</FormActionFieldSC>
			</FormSC>
		</FormContainerSC>
	);
};

SignInForm.propTypes = {};

export default SignInForm;
