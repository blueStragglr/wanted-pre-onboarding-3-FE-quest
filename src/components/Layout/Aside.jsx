import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { useRecoilState } from "recoil";
import { authState } from "@/atoms/authAtom";

const Aside = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);
  console.log(auth);

  function handleNavigate(e) {
    const value = e.target.textContent.toLowerCase().replaceAll(" ", "");
    if (value === "main") {
      navigate(`/`);
    } else navigate(`/${value}`);
  }

  function handleLogout() {
    setAuth(false);
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
          My page
        </li>
      </ul>
      {auth ? (
        <Auth onClick={handleLogout}>
          <IoMdLogOut className="icon" />
          <p>Logout</p>
        </Auth>
      ) : (
        <Auth onClick={(e) => handleNavigate(e)}>
          <IoMdLogIn className="icon" />
          <p>Login</p>
        </Auth>
      )}
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
      span {
        font-size: 12px;
        align-self: flex-end;
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
