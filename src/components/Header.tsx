import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  padding: 20px;
  border-bottom: 3px solid #cecece;
  font-family: ${(props) => props.theme.headerFont};
  font-weight: bold;
  font-style: italic;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">Wanted Pre-onboarding course</Link>
    </HeaderWrapper>
  );
}

export default Header;
