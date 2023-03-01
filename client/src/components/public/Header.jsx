import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-content: center;
  height: 80px;
  padding: 20px 0px 20px 20px;
  border-bottom: 1px solid #DBDBDB;

  p {
    font-size: 18pt;
    font-weight: 700;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <p>Wanted Pre-onboarding course</p>
    </StyledHeader>
  )
}

export default Header;