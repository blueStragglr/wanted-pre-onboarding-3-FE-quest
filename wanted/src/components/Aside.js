import React from "react";
import styled from "styled-components";
import PageRoute from "./PageRoute";

const AsideStyle = styled.aside`
  border-right: solid 2px gray;
  width: 15rem;
  display: flex;
  flex-direction: column;
`;

const Aside = () => {
  return (
    <AsideStyle>
      <PageRoute path="pageA">Page A</PageRoute>
      <PageRoute path="pageB">Page B</PageRoute>
      <PageRoute path="pageC">Page C</PageRoute>
    </AsideStyle>
  );
};

export default Aside;
