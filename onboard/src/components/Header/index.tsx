import { Link } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderSignInBtn } from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>Wanted Pre-onboarding course</HeaderLogo>
      <HeaderSignInBtn>
        <Link to="/sign-in">SignIn</Link>
      </HeaderSignInBtn>
    </HeaderContainer>
  );
}

export default Header;
