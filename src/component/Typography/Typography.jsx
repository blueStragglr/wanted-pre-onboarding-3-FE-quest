import styled from "styled-components";

const Typography = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  ${(props) => props.header && props.theme.font.header};
  ${(props) => props.headerButton && props.theme.font.headerButton};
  ${(props) => props.mainTitle && props.theme.font.mainTitle};
  ${(props) => props.context && props.theme.font.context};
`;

export default Typography;
