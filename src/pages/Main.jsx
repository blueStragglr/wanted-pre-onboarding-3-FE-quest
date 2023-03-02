import React from "react";
import styled, { css } from "styled-components";

const Main = () => {
  return (
    <Page className="page">
      <p>Main</p>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
`;

export default Main;
