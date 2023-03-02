import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { UserId } from "../atoms";

const ButtonStyle = styled.button`
  width: 5rem;
  height: 3rem;
  background-color: inherit;
  border: 2px solid gray;
  :hover {
    cursor: pointer;
    color: #0f6fbd;
  }
`;

const LogInButton = () => {
  const [user, setUser] = useRecoilState(UserId);
  const onClickLogOut = () => {
    setUser("");
  };
  if (user) {
    return (
      <ButtonStyle type="button" onClick={onClickLogOut}>
        Log Out
      </ButtonStyle>
    );
  }
  return (
    <Link to="/logIn">
      <ButtonStyle type="button">Log In</ButtonStyle>
    </Link>
  );
};

export default LogInButton;
