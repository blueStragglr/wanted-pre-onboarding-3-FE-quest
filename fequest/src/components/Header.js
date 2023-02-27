import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import WantedLogo from "../assets/wantedLogo.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  padding: 1% 2%;
  position: fixed;
  z-index: 2;
`;

const TextContainer = styled.h1`
  margin: 10rem;
  padding: 30vh;
  position: fixed;
`;

const LogoStyle = styled(NavLink)`
  img {
    max-width: 100px;
    max-height: 100px;
    background-size: 20%;
  }
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
`;

const Buttons = styled(NavLink)`
  position: absolute;
  bottom: 35%;
  right: 10rem;
  color: black;
  font-size: 25px;
  &:link {
    text-decoration: none;
  }
`;

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.clear();
    navigate("/");
  };

  return (
    <HeaderContainer>
      <LogoStyle to="/">
        <img src={WantedLogo} alt="logo" />
      </LogoStyle>
      <TextContainer>Wanted Pre-onboarding course</TextContainer>
      <div>
        {localStorage.id ? "" : <Buttons to="/login">Login</Buttons>}
        {localStorage.id ? (
          <Buttons onClick={handleLogout}>Logout</Buttons>
        ) : null}
      </div>
    </HeaderContainer>
  );
}

export default Header;
