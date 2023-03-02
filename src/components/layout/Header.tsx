import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: ${(props) => props.theme.darkGray};
  padding: 20px;
  overflow: hidden;

  a {
    font-size: 20px;
    line-height: 1;
    color: ${(props) => props.theme.lightGray};
  }

  .btn-login {
    float: right;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">wanted pre-onboarding course</Link>
      <Link to="/login" className="btn-login">
        login
      </Link>
    </HeaderContainer>
  );
};

export default Header;
