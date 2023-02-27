import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    if ((email, password)) {
      alert("로그인완료");
      navigation("/");
    } else {
      alert("이메일 비밀번호 입력주세요");
    }
  };
  return (
    <div className="relative h-full bg-orange-400">
      <div className="absolute top-1/2 left-1/2 origin-top-lef -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-2xl font-bold mb-3 text-center text-orange-600 animate-bounce">
          로그인
        </h2>
        <input
          className="outline-0 w-full border-2 h-12 mb-3 text-center focus:border-solid focus:border-orange-600"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email을 입력해주세요"
        />
        <input
          className="outline-0 w-full border-2 h-12 mb-3 text-center focus:border-solid focus:border-orange-600"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password를 입력해주세요"
        />
        <button
          className="w-full bg-orange-600 text-white cursor-pointer rounded-md p-3 hover:bg-orange-500 "
          onClick={handleLoginClick}
        >
          로그인하기
        </button>
      </div>
    </div>
  );
};

export default Login;
