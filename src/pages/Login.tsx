import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setCookie } from "../util/cookie";

const users = [
  {
    username: 'blue',
    password: '1234',
    userInfo: { name: 'blueStragglr' }
  },
  {
    username: 'white',
    password: '1234',
    userInfo: { name: 'whiteDwarf' }
  },
  {
    username: 'red',
    password: '1234',
    userInfo: { name: 'redGiant' }
  },
]
const _secret = '1234qwer!@#$'

const login = async (username, password) => {
  const user = users.find(user => {
    return user.username === username && user.password === password;
  })
  return user
    ? { message: 'SUCCESS', token: JSON.stringify({ user: user.userInfo, secret: _secret }) }
    : null
}

const getUserInfo = async (token) => {
  const parsedToken = JSON.parse(token)
  if (!parsedToken?.secret) return null

  const loggedUser = users.find((user) => {
    if (user.userInfo.name === parsedToken.user.name) {
      return user
    }
  })
  return loggedUser ? loggedUser.userInfo.name : null
}


const Login = () => {
  const [userInfo, setUserInfo] = useState({ name: '' })
  const navigate = useNavigate()

  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const loginRes = await login(formData.get('username'), formData.get('password'))
    if (!loginRes) return;

    const userRes = await getUserInfo(loginRes.token)
    if (!userRes) return;

    setUserInfo(userRes)
    alert(`${userRes}님, 반갑습니다.`)
    setCookie('login', JSON.stringify(userInfo))
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
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="id">아이디</label>
            <input type='text' placeholder="아이디를 입력해주세요." id='id' name='username' />
          </div>
          <div>
            <label htmlFor="pw">비밀번호</label>
            <input type='password' placeholder="비밀번호를 입력해주세요." id='pw' name='password' />
          </div>
          <button type="submit" value="Submit">로그인하기</button>
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
