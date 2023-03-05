import styled from "styled-components";
import { GlobalStyle } from "../src/style/GlobalStyle";
import Layout from "./components/common/Layout";
import Router from "./routers/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div``;

export default App;
