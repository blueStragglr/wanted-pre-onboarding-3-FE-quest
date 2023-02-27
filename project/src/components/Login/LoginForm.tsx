import React, { useState } from "react";
import { LoginInfo } from "../../type/login.type";
import { USER_INFO } from "../../dummyData/userInfoDummy";
import { useNavigate } from "react-router-dom";
export const LoginForm = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    id: "",
    password: "",
  });
  const [isError, setError] = useState(false);

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    setLoginInfo((prev) => ({ ...prev, id }));
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setLoginInfo((prev) => ({ ...prev, password }));
  };

  const handleLogin = () => {
    if (
      USER_INFO.id === loginInfo.id &&
      USER_INFO.password === loginInfo.password
    ) {
      localStorage.setItem("testLoginState", "true");
      navigate("/");
    } else {
      setError(true);
    }
  };
  return (
    <section className="contents-layout flex-col gap-4">
      <header>Login</header>
      <article className="text-base flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col">
          <span>아이디</span>
          <input
            type="text"
            placeholder="ID"
            className="border-2 rounded-md p-1"
            onChange={handleId}
          ></input>
        </div>
        <div className="flex flex-col">
          <span>비밀번호</span>
          <input
            type="password"
            placeholder="Password"
            className="border-2 rounded-md p-1"
            onChange={handlePassword}
          ></input>
        </div>
        {isError && (
          <span className="text-xs text-red-500">
            아이디 또는 비밀번호가 틀렸습니다.
          </span>
        )}
        <button type="button" className="btn" onClick={handleLogin}>
          로그인
        </button>
      </article>
    </section>
  );
};
