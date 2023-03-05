import styled from "styled-components";

const Typography = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  ${(props) => props.header && props.theme.font.header};
`;

export default Typography;
