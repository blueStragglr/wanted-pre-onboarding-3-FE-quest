import styled from "styled-components";

function Header() {
  return <HeaderWrapper>Wanted Pre-onboarding course</HeaderWrapper>;
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #192a56;
  padding: 30px;
  display: flex;
  position: fixed;
  z-index: 3;
  font-weight: 600;
  font-size: 1.3rem;
  font-style: italic;
  letter-spacing: 0.5px;
  color: #fff;
`;
