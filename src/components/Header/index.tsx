import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Wanted pre onboarding fe March</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #757575;
`;

export default Header;
