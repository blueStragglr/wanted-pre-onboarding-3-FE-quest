import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSide = styled.aside`
  border-right: 1px solid black;
  width: 20%;
`;

const StyledNavList = styled.ul`
  margin-top: 15px;
  padding-left: 12px;
`;

const StyledListItem = styled.li`
  padding: 10px 0;
`;

const Sidebar = () => {
  return (
    <StyledSide>
      <nav>
        <StyledNavList>
          <StyledListItem>
            <Link to="/a">Page A</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/b">Page B</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/c">Page C</Link>
          </StyledListItem>
        </StyledNavList>
      </nav>
    </StyledSide>
  );
};

export default Sidebar;
