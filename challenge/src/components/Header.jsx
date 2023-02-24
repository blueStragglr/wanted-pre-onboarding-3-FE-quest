import styled from 'styled-components';

const HeaderWrap = styled.div`
  border-bottom: 1px solid #000;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  height: 40px;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <p>Wanted Pre-onboarding course</p>
    </HeaderWrap>
  );
};

export default Header;
