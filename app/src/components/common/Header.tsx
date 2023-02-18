import styled from 'styled-components';

const HeaderWrap = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  z-index: 2;
  background-color: #fff;
`;

const MainTitle = styled.h2`
  font-weight: 600;
  font-size: 1.3rem;
  font-style: italic;
  letter-spacing: 0.5px;
`;
const Header = () => {
  return (
    <HeaderWrap>
      <MainTitle>Wanted Pre-onboarding course</MainTitle>
    </HeaderWrap>
  );
};

export default Header;
