import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Main>
        <Sidebar />
        <Context>{props.children}</Context>
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
