import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const HeaderWrapper = styled.div`
  background-color: #61dafb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <Logo onClick={homeHandler}>
        <FaHome />
      </Logo>
      <LoginButton to="/login">Login</LoginButton>
    </HeaderWrapper>
  );
};

export default Header;
