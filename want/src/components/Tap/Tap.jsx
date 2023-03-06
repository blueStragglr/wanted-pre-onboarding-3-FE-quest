import styled from "styled-components";
import { Link } from "react-router-dom";

const SideNav = styled.div`
  height: 100vh;
  width: 200px;
  background-color: #f8f9fa;
`;

const NavItem = styled(Link)`
  display: block;
  padding: 16px;
  text-decoration: none;
  color: #212529;

  &:hover {
    background-color: #e9ecef;
  }

  &.active {
    background-color: #f1f3f5;
  }
`;

export default function Tap() {
  return (
    <SideNav>
      <NavItem to="/a" activeClassName="active" exact>
        Page A
      </NavItem>
      <NavItem to="/b" activeClassName="active">
        Page B
      </NavItem>
      <NavItem to="/c" activeClassName="active">
        Page C
      </NavItem>
    </SideNav>
  );
}
