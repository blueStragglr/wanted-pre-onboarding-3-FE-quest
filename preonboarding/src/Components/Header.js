import { Link } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.header`
  padding: 15px;
  border-bottom: 1px solid black;
  font-size: 12px;
`;

const Header = () => {
  return (
    <Layout>
      <h1>
        <Link to="/">Wanted Pre-onboarding course</Link>
      </h1>
    </Layout>
  );
};

export default Header;
