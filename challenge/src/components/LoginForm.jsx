import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  background-color: #c1c1f5;
  border-radius: 10px;
`;
const Input = styled.input`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #000;
`;
const Button = styled.button`
  margin-top: 20px;
  border-radius: 10px;
  background: #fff;
  padding: 5px 20px;
`;

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <WrapperInner>
        <p>로그인</p>
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <Button onClick={() => navigate('/a')}>로그인</Button>
      </WrapperInner>
    </Wrapper>
  );
};

export default LoginForm;
