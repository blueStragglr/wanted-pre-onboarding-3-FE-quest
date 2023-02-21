import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <HeaderBox>
        <HeaderText>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/Main">
            Wanted Pre-onboarding course
          </Link>
        </HeaderText>
      </HeaderBox>
    </Container>
  );
}

export default Header;

const Container = styled.div``;

const HeaderBox = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

const HeaderText = styled.span`
  font-weight: bold;
  font-size: 35px;
  font-style: italic;
  margin: 35px;
`;
