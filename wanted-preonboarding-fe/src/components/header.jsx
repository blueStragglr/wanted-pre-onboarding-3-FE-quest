import styled from "styled-components";

const MainHeader = styled.div`
  min-width: 90vw;
  color: #14424a;
  padding: 20px;
  font-weight: bold;
  font-size: 2rem;
  border-bottom : 1px solid #fff;
`;

function Header({ children }) {
  return <MainHeader>{children}</MainHeader>;
}

export default Header;
