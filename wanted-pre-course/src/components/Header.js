import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderSt = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  border-bottom: 1px solid black;
`;

const Btn = styled.button`
  border: 1px solid black;
  outline: none;
  padding: 0.5rem;
  border-radius: 30px;
  background-color: transparent;
  margin-right: 1.5rem;
  &:hover {
    border: 1px solid #5a81dbcc;
    color: #5a81dbcc;
  }
`;
const Title = styled.span`
  margin-left: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderSt>
      <Link to="/">
        <Title>Wanted Pre-onboarding course</Title>
      </Link>
      <Link to="/login">
        <Btn>Login</Btn>
      </Link>
    </HeaderSt>
  );
};
export default Header;
