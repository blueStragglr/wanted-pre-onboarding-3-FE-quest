import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: ${({ width }) => (width ? width : '485px')};
  height: ${({ height }) => (height ? height : '77px')};

  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '12px'};

  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};

  color: ${({ color }) => (color ? color : 'white')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#4957CD')};
`;

export default Button;
