import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Login = ({ setIsOpen }) => {
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Login</Button>
    </div>
  );
};

export default Login;
