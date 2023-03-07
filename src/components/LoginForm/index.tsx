import React from 'react'
import Input from '../common/Input'
import useLoiginForm from './hooks/useLoiginForm'
import * as S from './style'
const LoginForm = () => {
  const {
    state: { passwrd, username },
    onSubmit: { Submit },
    onEvent: { onUserName, onPasswrd },
  } = useLoiginForm()
  return (
    <>
      <S.InputForm onSubmit={Submit}>
        <S.InputBox>
          <Input
            text="username"
            id="username"
            type="text"
            value={username}
            onChange={onUserName}
          />
        </S.InputBox>
        <S.InputBox>
          <Input
            type="text"
            id="passwrd"
            text="password"
            value={passwrd}
            onChange={onPasswrd}
          />
        </S.InputBox>
        <button type="submit" disabled={!username || !passwrd}>
          로그인
        </button>
      </S.InputForm>
    </>
  )
}

export default LoginForm
