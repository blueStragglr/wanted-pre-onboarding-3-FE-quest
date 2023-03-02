import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavStyled = styled.div`
  height: 40px;
  border-bottom: 0.2px solid #dadada;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-weight: 600; /* 굵기 */
  font-style: italic; /* 기울기 */
  font-size: 1rem;
`;

const LoginButtonStyled = styled.button`
  height: 30px;
  width: 100px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #24a6ff;
  &:hover {
    background-color: #016fbb;
  }
  /* text-decoration: none;
  outline: none;
  border: none; */
  a {
    text-decoration-line: none;
    color: white;
  }
`;
const Nav = () => {
  return (
    <>
      <>
        <NavStyled>
          <>
            <div>Wanted Pre-onboarding course</div>
            <LoginButtonStyled>
              <Link to="/login">로그인</Link>
            </LoginButtonStyled>
          </>
        </NavStyled>
      </>
    </>
  );
};

export default Nav;
