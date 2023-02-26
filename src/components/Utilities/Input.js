import styled from 'styled-components';

const Input = styled.input`
  width: ${({ width }) => (width ? width : '485px')};
  height: ${({ height }) => (height ? height : '77px')};

  margin: ${({ margin }) => (margin ? margin : '0px')};
  padding: ${({ padding }) => (padding ? padding : '0px')};

  border: 1px solid ${({ border }) => (border ? border : '#D0D5DD')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : `12px`};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};

  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
  color: ${({ color }) => (color ? color : '#99A4BA')};
`;

export default Input;
