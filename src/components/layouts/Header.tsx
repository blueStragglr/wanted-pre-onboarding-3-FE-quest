import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  align-items: center;
  padding: 20px;
  border-bottom: 3px solid #cecece;
  font-family: ${(props) => props.theme.headerFont};
`;

const Title = styled(Link)`
  font-weight: bold;
`;

const SignWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SignIn = styled(Link)`
  padding: 10px;
  border: solid transparent;
  margin-right: 10px;
`;
const SignUp = styled(Link)`
  padding: 10px;
  border: solid 2px;
  border-radius: 16px;
`;
function Header() {
  return (
    <HeaderWrapper>
      <Title to="/">Wanted Pre-onboarding course</Title>
      <SignWrapper>
        <SignIn to="/sign">Sign In</SignIn>
        <SignUp to="/sign">Sign Up</SignUp>
      </SignWrapper>
    </HeaderWrapper>
  );
}

export default Header;
