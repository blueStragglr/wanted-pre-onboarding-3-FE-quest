import { createGlobalStyle } from "styled-components";
import reset from "reset-css";

const GlobalStyle = createGlobalStyle`
  ${reset}

  button {
    margin: 0;
    border: 0;
    padding: 0;
    cursor: pointer;
    background-color: #FFF;
  }
`;

export default GlobalStyle;
