import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 1rem;
  border-bottom: 1px solid #dcdcdc;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">Wanted Pre-onboarding course</Link>
      </h1>
    </StyledHeader>
  );
};

export default Header;
