import styled from "styled-components";

const NavHeader = styled.div`
  min-width: 200px;
  padding-right: 20px;
`;

function NavigationHeader({ children }) {
  return <NavHeader>{children}</NavHeader>;
}

export default NavigationHeader;