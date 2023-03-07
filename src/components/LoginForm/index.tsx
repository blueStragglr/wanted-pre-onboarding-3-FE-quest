import React from 'react'
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
          <input
            type="text"
            id="username"
            value={username}
            onChange={onUserName}
          />
        </S.InputBox>
        <S.InputBox>
          <input
            type="text"
            id="passwrd"
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
