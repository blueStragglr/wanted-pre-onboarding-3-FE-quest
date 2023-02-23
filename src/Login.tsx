import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { isLogin } from './store/store';

const LoginBox = styled.div`
  margin: 50px auto;
  text-align: center;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
`;

export default function Login() {
  const dispatch = useDispatch();
  return (
    <LoginBox>
      <div>환영합니다</div>
      <div>
        아이디: <input />
        <br />
        비밀번호: <input type={'password'} />
      </div>
      <button
        onClick={() => {
          dispatch(isLogin(true));
        }}
      >
        로그인
      </button>
    </LoginBox>
  );
}
