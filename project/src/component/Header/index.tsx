import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <Title>
        <Link to="/">Wanted Pre-onboarding Challenge</Link>
      </Title>
      <Login to="/login">Login</Login>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 30px;
  border-bottom: 1px solid #ececec;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
`;

const Login = styled(Link)`
  font-size: 18px;
`;
