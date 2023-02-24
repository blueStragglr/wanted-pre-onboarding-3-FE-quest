import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Login = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
