import styled from "styled-components";

const NavBox = styled.nav`
  width: 250px;
  border-right: 2px solid black;
  height: 100%;
`;

const Nav = () => {
  return (
    <>
      <NavBox>
        <div>Page A</div>
        <div>Page B</div>
        <div>Page C</div>
      </NavBox>
    </>
  );
};

export default Nav;
