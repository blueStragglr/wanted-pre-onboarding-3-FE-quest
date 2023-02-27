import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  </>
);
