import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setCookie } from "../util/cookie";

const Login = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    id: '',
    pw: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onSubmit = () => {
    setCookie('login', JSON.stringify(inputs))
    navigate('/')
  }


  return (
    <Main>
      <div className="title">
        <h1>로그인</h1>
      </div>
      <div className="back">
        <div onClick={() => navigate('/')}>
          🔙 메인으로 돌아가기</div>
      </div>
      <section>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
          <div>
            <label htmlFor="id">아이디</label>
            <input type='text' placeholder="아이디를 입력해주세요." id='id' name='id' value={inputs.id} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="pw">비밀번호</label>
            <input type='password' placeholder="비밀번호를 입력해주세요." id='pw' name='pw' value={inputs.pw} onChange={onChange} />
          </div>
          <button>로그인하기</button>
        </form>
      </section>
    </Main>
  )
};

const Main = styled.main`
position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;

  .title {
    width: 100%;
    position: absolute;
    text-align: center;
    margin-top: 100px;
  }

  .back {
    position: absolute;
    padding: 30px;
    cursor: pointer;

    :hover {
      color: orange;
    }
  }
  
  section {
    background-color: royalblue;
    width: 500px;
    height: 400px;
    margin: auto;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      font-size: 20px;
      line-height: 30px;
      color: white;
    }

    input {
      width: 300px;
      margin-bottom: 20px;
    }

    button {
      margin: 30px auto 0;
    }
  }
`


export default Login;
