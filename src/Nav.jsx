import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <NavContainer>
        <span>Wanted Pre-onboarding course</span>
      </NavContainer>
    </>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;

  position: sticky;
  top: 0;

  padding-left: 50px;

  font-style: italic;
  font-weight: bolder;

  border-bottom: 1px solid lightgray;
  background-color: white;

  span {
    font-size: 26px;
  }
`;
