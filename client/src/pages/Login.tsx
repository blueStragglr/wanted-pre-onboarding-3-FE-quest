import styled from "styled-components";
import Header from "../components/layout/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // 로그인은 간단하게 아이디만 입력하면 넘어 갈 수 있도록 했습니다.
  const [myId, setMyId] = useState("");

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyId(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (myId === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    localStorage.setItem("myId", myId);
    navigate("/");
  };

  return (
    <>
      <Header />
      <LoginModal>
        <div>
          <h1>로그인</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="myid"
              value={myId}
              placeholder="아이디"
              onChange={handleInputText}
            />
            <input type="password" placeholder="아이디만 쳐주세요!" disabled />
            <button type="submit">로그인</button>
          </form>
        </div>
      </LoginModal>
    </>
  );
}

export default Login;

const LoginModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  > div {
    background-color: #f5f6fa;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1 {
      font-size: 2rem;
      font-weight: 600;
      color: #e84118;
    }
    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      > input {
        width: 300px;
        height: 40px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid #dcdde1;
        padding: 0 20px;
        font-size: 1rem;
        &:focus {
          outline: none;
        }
      }
      > button {
        cursor: pointer;
        width: 300px;
        height: 40px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid #dcdde1;
        padding: 0 20px;
        font-size: 1rem;
        background-color: #e84118;
        color: #fff;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
