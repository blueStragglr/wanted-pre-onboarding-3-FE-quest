import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Wanted Pre-onboarding course</HeaderText>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 20px;
  height: 80px;
  border-bottom: 1px solid lightgray;
`;

const HeaderText = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 80px;
`;
