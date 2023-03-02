import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid #dcdcdd;
  background-color: #fff;
  padding: 10px 15px;
`;

function Input({ children, ...rest }) {
  return <StyledInput {...rest}>{children}</StyledInput>;
}
export default Input;
