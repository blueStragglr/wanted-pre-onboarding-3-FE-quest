import styled from "styled-components";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <SideBarWrap>
      <Nav>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Page A</Link>
        </li>
        <li>
          <Link to="/page_b">Page B</Link>
        </li>
        <li>
          <Link to="/page_c">Page C</Link>
        </li>
      </Nav>
    </SideBarWrap>
  );
}

const SideBarWrap = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid #ddd;
  height: calc(100vh - 50px);
`;

const Nav = styled.nav`
  li {
    padding: 1rem 0;
    a {
      font-size: 1.2rem;
      color: #444;
    }
  }
`;

export default SideBar;
