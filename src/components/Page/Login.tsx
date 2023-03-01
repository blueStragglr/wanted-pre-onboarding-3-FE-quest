import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {logIn} from '../../store/loggedReducer'
import * as S from './styles'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (e: {preventDefault: () => void}) => {
    e.preventDefault()
    dispatch(logIn())
    navigate('/')
  }

  return (
    <S.LoginContainer onSubmit={onSubmit}>
      <h2>Login</h2>
      <S.InputContainer>
        <div>Username</div>
        <label />
        <input type="text" />
      </S.InputContainer>
      <S.InputContainer>
        <div>Password</div>
        <label />
        <input type="password" />
      </S.InputContainer>
      <button type="submit">Submit</button>
    </S.LoginContainer>
  )
}

export default Login
