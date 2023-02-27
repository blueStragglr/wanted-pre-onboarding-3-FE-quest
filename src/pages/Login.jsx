import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputId = e.target[0].value;
    const inputPw = +e.target[1].value;
    const fetchFakeIds = async () => {
      const getData = await fetch(
        "https://raw.githubusercontent.com/Kenny-Korea/JSON_Repository/main/FakeIds"
      );
      // await 하지 않으면 promise 객체를 바로 반환해버림
      const data = await getData.json();
      return data;
    };
    const fetchedData = await fetchFakeIds();
    const loginResult = fetchedData.filter(
      (data) => inputId === data.id && inputPw == data.password
    );

    if (Array.isArray(loginResult) && loginResult.length !== 0) {
      console.log("로그인 성공");
      const [user] = loginResult;
      setCurrentUser(user);
      navigate("/");
    } else {
      console.log("로그인 실패");
      setErr(true);
    }
  };
  return (
    <>
      <div className="Login">
        <h1>Login Page</h1>
        <div>로그인 페이지입니다.</div>
        <hr />
        <div>id: wanted / pw: 123123</div>
        <div>id: abc / pw: 123123</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">ID</label>
          <input type="id" id="id" />
          <label htmlFor="password">PW</label>
          <input type="password" id="password" />
          <button type="submit">Login</button>
        </form>
        {err &&
          "로그인에 실패하였습니다. 아이디와 비밀번호를 다시 확인해주세요."}
      </div>
    </>
  );
};

export default Login;
