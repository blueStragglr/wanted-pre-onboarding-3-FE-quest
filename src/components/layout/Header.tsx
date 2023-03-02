import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../store/loginSlice";
import { AppDispatch, RootState } from "../../store/store";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const loginStatus = useSelector(
    (state: RootState) => state.login.loginStatus
  );
  const id = useSelector((state: RootState) => state.login.id);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    if (confirm("정말로 로그아웃 하시겠습니까?")) {
      dispatch(logout());
      navigate("/");
    } else return;
  };

  return (
    <MyHeader>
      <h1>Wanted Pre-onboarding course</h1>
      {!loginStatus ? (
        <button onClick={() => navigate("/login")}>Login</button>
      ) : (
        <>
          <div>안녕하세요 {id}님</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </MyHeader>
  );
};

const MyHeader = styled.header`
  grid-area: header;
  border-bottom: 3px solid lightgray;
  display: flex;
  gap: 20px;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 25px;
    margin-left: 50px;
  }
  button {
    display: inline-block;
    background-color: white;
    outline: none;
    border: 1px solid lightgray;
    padding: 10px 20px;
    border-radius: 8px;
    margin-right: 50px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background-color: lightgray;
    }
  }
`;

export default Header;
