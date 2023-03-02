import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/authSlice'
import styled from 'styled-components'

const Login = () => {
  const [userId, setUserId] = useState()

  const authenticated = useSelector(state => state.auth.authenticated)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({userId, authenticated}))
  }
  // const handleLogout = (e) => {
  //   e.preventDefault()
  //   dispatch(logout())
  // }
  
  return (
    <LoginBox>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <label htmlFor="useId">아이디</label> */}
        <input id='userId' type='text' placeholder='아이디를 입력하세요' onChange={(e) => setUserId(e.target.value)} />
        {/* <label htmlFor="userPw">비밀번호</label> */}
        <input id='userPw' type='password' placeholder='비밀번호를 입력하세요' />      
        <button type='submit'>로그인</button>
      </form>
    </LoginBox>
  )
}

export default Login

const LoginBox = styled.div`
display: flex;
justify-content: center;
  form {
    margin-top: 40px;
    padding: 20px;
    width: fit-content;
  }
  label {
    display: block;
    padding: 10px 0;
    font-size: 20px;
  }
  input {
    display: block;
    width: 300px;
    margin-bottom: 20px;
    height: 50px;
    border: none;
    border-bottom: 3px solid black;
    font-size: 16px;
  }
  button[type=submit] {
    margin-top: 20px;
    width: 100%;
    height: 60px;
    background-color: white;
    font-size: 16px;
    cursor: pointer;
    :hover {
      background-color: black;
      color: white;
      transition: .3s;
    }
  }
`