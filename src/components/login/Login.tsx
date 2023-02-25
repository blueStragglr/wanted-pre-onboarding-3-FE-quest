import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authActions } from '../../store/auth';
import { AuthContainer, Controller, LoginButton } from './Login.style';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = e => {
    e.preventDefault();

    dispatch(authActions.login());
    navigate('/');
  };

  return (
    <AuthContainer>
      <form onSubmit={loginHandler}>
        <Controller>
          <label htmlFor='email'>이메일</label>
          <input type='email' id='email' />
        </Controller>
        <Controller>
          <label htmlFor='password'>비밀번호</label>
          <input type='password' id='password' />
        </Controller>
        <LoginButton>Login</LoginButton>
      </form>
    </AuthContainer>
  );
}

export default Login;
