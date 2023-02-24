import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrap = styled.div`
  border-bottom: 1px solid #000;
  padding: 10px;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <p>Wanted Pre-onboarding course</p>
      <Link to="/login">Login</Link>
    </HeaderWrap>
  );
};

export default Header;
