import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #dcdcdd;
  background-color: #36f;
  padding: 10px 15px;
  color: #fff;
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
export default Button;
