import { Link } from "react-router-dom";
import styled from "styled-components";
import { PAGE_PATH } from "../routes";

function Sidebar() {
  return (
    <SidebarWrapper>
      <StyledLink to={PAGE_PATH.A}>Page A</StyledLink>
      <StyledLink to={PAGE_PATH.B}>Page B</StyledLink>
      <StyledLink to={PAGE_PATH.C}>Page C</StyledLink>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const StyledLink = styled(Link)`
  padding: 1.5rem;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;

  :hover {
    color: blue;
  }
`;

export default Sidebar;
