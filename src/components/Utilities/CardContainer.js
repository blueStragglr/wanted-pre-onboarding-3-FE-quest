import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'row'};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};

  width: ${({ width }) => (width ? width : '100px')};
  height: ${({ height }) => (height ? height : '100px')};

  padding: ${({ padding }) => (padding ? padding : '0px')};
  margin: ${({ margin }) => (margin ? margin : '0px')};

  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0px')};

  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
  color: ${({ color }) => (color ? color : 'white')};
`;

export default CardContainer;
