import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNavigationBar = styled.h1`
  font-size: 20px;
  font-style: italic;
  color: black;
  padding: 20px;
  border-bottom: 2px solid gray;
  font-weight: bold;
  div {
    position: absolute;
    top: 10px;
    right: 30px;
    a {
      margin-right: 5px;
      font-size: 15px;
    }
  }
`;

function Header() {
  return (
    <>
      <TopNavigationBar>
        Wanted pre-onboarding-course
        <div>
          <Link to={{ pathname: `/` }}>Home</Link>
          <Link to={{ pathname: `/login` }}>Login</Link>
        </div>
      </TopNavigationBar>
    </>
  );
}

export default Header;
