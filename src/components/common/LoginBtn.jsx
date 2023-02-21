import React from 'react';
import styled from '@emotion/styled';

/**
 *
 */
const LoginBtn = ({title}) => {
  return (
    <LoginBtnStyle>
      {title}
    </LoginBtnStyle>
  );
};

const LoginBtnStyle = styled.button`
	min-width: 350px;
	height: 50px;
	color: white;
	background-color: teal;
	border-radius: 8px;
	border: none;
	background-color: ${(props) => (props.disabled ? 'gray' : 'teal')};
`;

export default LoginBtn;
