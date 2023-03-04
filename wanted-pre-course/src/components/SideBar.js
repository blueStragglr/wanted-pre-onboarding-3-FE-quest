import styled from "styled-components";
import { Link } from "react-router-dom";

const SideBarSt = styled.div`
  width: 10rem;
  float: left;
  height: 100vh;
  border-right: 1px solid black;
`;

const Li = styled.li`
  padding: 1.5rem;
`;

const SideBar = () => {
  return (
    <SideBarSt>
      <ul>
        <Link to="/page1">
          <Li>Page A</Li>
        </Link>
        <Link to="/page2">
          <Li>Page B</Li>
        </Link>
        <Link to="/page3">
          <Li>Page C</Li>
        </Link>
      </ul>
    </SideBarSt>
  );
};
export default SideBar;
