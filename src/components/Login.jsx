import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [button, setButton] = useState(true);
  function changeButton() {
    //아이디에 @가 포함되어있고 비밀번호가 5자리 이상일때 로그인버튼이 활성화되는 기능을 구현하기위함
    id.includes("@") && pw.length >= 5 ? setButton(false) : setButton(true);
  }
  const navigate = useNavigate();
  const goToMain = () => {
    navigate(`/`);
  };
  const realId = "chosule@naver.com";
  const realPw = "12345";
  return (
    <div>
      <input
        placeholder="이메일아이디를 입력하세요"
        id="id"
        className="login"
        onChange={(e) => {
          setId(e.target.value);
        }}
        onKeyUp={changeButton}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        id="password"
        className="login"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        onKeyUp={changeButton}
      />
      <button
        type="button"
        className="loginButton"
        disabled={button}
        onClick={(e) => {
          if (realId === id) {
            if (realPw === pw) {
              e.stopPropagation();
              goToMain();
            }
          } else {
            alert("아이디 혹은 비밀번호가 일치하지않습니다.");
          }
        }}
      >
        버튼
      </button>
    </div>
  );
}
