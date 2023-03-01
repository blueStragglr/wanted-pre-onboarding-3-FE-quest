import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";

const Aside = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleNavigate(e) {
    const value = e.target.textContent.toLowerCase().replaceAll(" ", "");
    if (value === "main") {
      navigate(`/`);
    } else navigate(`/${value}`);
  }

  return (
    <Container>
      <ul>
        <li
          className={pathname === "/" ? "active" : "basic"}
          onClick={(e) => handleNavigate(e)}
        >
          Main
        </li>
        <li
          className={pathname === "/about" ? "active" : "basic"}
          onClick={(e) => handleNavigate(e)}
        >
          About
        </li>
        <li
          className={pathname === "/mypage" ? "active" : "basic"}
          onClick={(e) => handleNavigate(e)}
        >
          MyPage
        </li>
      </ul>
      <Auth onClick={(e) => handleNavigate(e)}>
        <IoMdLogIn className="icon" />
        <p>Login</p>
      </Auth>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 100%;
  background-color: var(--color-point);
  border-radius: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    flex-wrap: wrap;
    padding-top: 20px;
    li {
      width: 80%;
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 15px 0;
      border-bottom: 1px solid var(--color-primary);
      color: var(--color-point-dark);
      cursor: pointer;
      &.active {
        color: var(--color-primary);
      }
      &:hover {
        color: var(--color-primary);
      }
    }
  }
`;

const Auth = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 20px;
  box-sizing: border-box;
  cursor: pointer;
  .icon {
    padding-right: 5px;
    font-size: 22px;
  }
`;
export default Aside;
