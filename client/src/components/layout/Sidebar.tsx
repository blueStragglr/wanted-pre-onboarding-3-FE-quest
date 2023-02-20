import { Link } from "react-router-dom";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarContainer>
      <Link to="/apage">
        <p>Page A</p>
      </Link>
      <Link to="/bpage">
        <p>Page B</p>
      </Link>
      <Link to="/cpage">
        <p>Page C</p>
      </Link>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100vh;
  background-color: #f5f6fa;
  padding-top: 80px;
  position: fixed;
  z-index: 2;
  > a {
    text-decoration: none;
    > p {
      text-align: center;
      margin: 10px;
      padding: 20px;
      border-radius: 5px;
      color: #2f3640;
      cursor: pointer;
      &:hover {
        background-color: #ff7675;
        color: #fff;
      }
    }
  }
`;
