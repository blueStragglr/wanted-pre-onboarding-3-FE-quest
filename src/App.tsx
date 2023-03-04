import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../src/style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Container>
        <GlobalStyle />
      </Container>
    </div>
  );
}

const Container = styled.div``;

export default App;
