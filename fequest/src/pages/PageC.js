import styled from "@emotion/styled";
import React from "react";
import { useLocation } from "react-router-dom";

const PageC = () => {
  const location = useLocation();

  return (
    <Layout>
      <Text pathname={location.pathname}>Page C</Text>
    </Layout>
  );
};

export default PageC;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  color: ${(props) => (props.pathname === "/pageC" ? "blue" : null)};
`;
