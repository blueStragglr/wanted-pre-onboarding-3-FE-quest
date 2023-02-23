import React, { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const sessionId = sessionStorage.getItem("id");

  const getLogin = () => {
    sessionStorage.setItem("id", id);
  };
  const getLogout = () => {
    sessionStorage.removeItem("id");
  };

  return sessionId ? (
    <>
      <div>로그인됨</div>
      <button
        className="btn-logout"
        onClick={() => {
          getLogout();
          window.location.replace("/login");
        }}
      >
        로그아웃
      </button>
    </>
  ) : (
    <div>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        onClick={() => {
          getLogin();
          window.location.replace("/login");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default Login;
