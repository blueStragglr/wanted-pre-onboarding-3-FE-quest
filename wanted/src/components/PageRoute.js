import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Page = styled.span`
  font-size: x-large;
  margin: 10px auto;
  > a {
    text-decoration: none;
    color: black;
    &:hover {
      color: #0f6fbd;
    }
  }
`;

const PageRoute = ({ children, path }) => {
  return (
    <Page>
      <Link to={path}>{children}</Link>
    </Page>
  );
};

export default PageRoute;
