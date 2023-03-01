import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logIn} from '../../store/loggedReducer'
import styled from 'styled-components'

const LoginContainer = styled.form`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 10px;
    font-size: var(--default-text-size);
  }

  button {
    background-color: transparent;
    border: 1px solid var(--dark-gray-2);
    border-radius: 2px;
    cursor: pointer;
    font-size: var(--small-text-size);

    :hover {
      background-color: aliceblue;
    }
  }
`

const InputContainer = styled.section`
  margin: 7px 0;

  font-size: var(--small-text-size);
  text-align: center;

  > input {
    margin-top: 5px;
    border: 1px solid var(--dark-gray-2);
    border-radius: 2px;
    padding: 3px 5px;

    font-size: var(--small-text-size);
  }
`

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (e: {preventDefault: () => void}) => {
    e.preventDefault()
    dispatch(logIn())
    navigate('/')
  }

  return (
    <LoginContainer onSubmit={onSubmit}>
      <h2>Login</h2>
      <InputContainer>
        <div>Username</div>
        <label />
        <input type="text" />
      </InputContainer>
      <InputContainer>
        <div>Password</div>
        <label />
        <input type="password" />
      </InputContainer>
      <button type="submit">Submit</button>
    </LoginContainer>
  )
}

export default Login
