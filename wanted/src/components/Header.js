import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <div>Wanted Pre-onboarding coures</div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 20px;
  border-bottom: 0.5px solid grey;
`;
