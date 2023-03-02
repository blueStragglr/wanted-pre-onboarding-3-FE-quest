import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderSt = styled.header`
  display: flex;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid black;
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
    </HeaderSt>
  );
};
export default Header;
