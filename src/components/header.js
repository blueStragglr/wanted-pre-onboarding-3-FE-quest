import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrap = styled.header`
  width: 100%;
  padding: 2% 1%;
  border-bottom: 1px solid black;
`;

const Title = styled(NavLink)`
  color: black;
  font-size: 1.3rem;
  &:link {
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Title to={"/"}>Wanted Pre-onboarding course</Title>
    </HeaderWrap>
  );
};

export default Header;
