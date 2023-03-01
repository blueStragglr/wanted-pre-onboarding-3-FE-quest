import { Link } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderSignInBtn } from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>Wanted Pre-onboarding course</HeaderLogo>
      <Link to="/sign-in">
        <HeaderSignInBtn>Sign In</HeaderSignInBtn>
      </Link>
    </HeaderContainer>
  );
}

export default Header;
