import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    navigate('/')
  }
  return (
    <LoginWrap>
      <FormWrap>
        <form onSubmit={event => handleSubmit(event)}>
          <div>ID</div>
          <input type={'text'} placeholder='ID' />
          <div>PW</div>
          <input type={'password'} placeholder='PW' />
          <button type='submit'>login</button>
        </form>
      </FormWrap>
    </LoginWrap>
  )
}

export default LoginPage

const LoginWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: lightgray;
`

const FormWrap = styled.div`
  width: 420px;
  padding: 30px 0px;
  margin: 0 auto;

  > form {
    div {
      font-size: 16px;
      margin-top: 16px;
    }
    input {
      width: 100%;
      margin-top: 6px;
      padding: 8px;
    }
    button {
      width: 100%;
      margin-top: 24px;
      padding: 8px;
      background: darkgrey;
      color: white;
      font-size: 18px;
    }
  }
`
