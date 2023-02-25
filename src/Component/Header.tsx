import styled from "styled-components";
import { Link } from "react-router-dom";
const TopNavigationBar = styled.h1`
  font-size: 20px;
  font-style: italic;
  color: black;
  padding: 20px;
  border-bottom: 2px solid gray;
  font-weight: bold;
  a{
    position: absolute;
    right: 30px;
    font-size: 15px;
  }
`;

function Header() {
  return (
    <>
      <TopNavigationBar>Wanted pre-onboarding-course
        <Link to={
            {pathname : `/`}
        }>Home</Link>
      </TopNavigationBar>
    </>
  );
}

export default Header;
