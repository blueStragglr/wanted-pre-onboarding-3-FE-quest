import styled from "styled-components";

const Navigation = styled.nav`
  min-width: 200px;
  min-height: 100%;
  padding-right: 20px;
  border-right: 1px solid #fff;
`;

function Nav({ children }) {
  return <Navigation>{children}</Navigation>;
}

export default Nav;