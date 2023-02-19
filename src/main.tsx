import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";

import App from "./App";
import AuthContextProvider from "./Context/AuthContextProvider";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
