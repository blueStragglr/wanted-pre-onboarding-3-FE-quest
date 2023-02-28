import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const HeaderWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  border-bottom: 1px solid gray;
`;

const Logo = styled.h1`
  display: inline-block;
  position: relative;
  padding-left: 20px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding-right: 20px;
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <Logo onClick={homeHandler}>Wanted Pre-onboarding course</Logo>
      <LoginButton to="/login">Login</LoginButton>
    </HeaderWrapper>
  );
};

export default Header;
