import styled from "styled-components";

const TopNavigationBar = styled.h1`
  font-size: 20px;
  font-style: italic;
  color: black;
  padding: 20px;
  border-bottom: 2px solid gray;
  font-weight: bold;
`;

function Header() {
  return (
    <>
      <TopNavigationBar>Wanted pre-onboarding-course</TopNavigationBar>
    </>
  );
}

export default Header;
