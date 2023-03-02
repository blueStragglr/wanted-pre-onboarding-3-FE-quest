import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
  body {
    .app {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 10% auto;
    grid-template-columns: 10% auto;
    grid-template-areas:
      'header header'
      'sidebar main'
      'sidebar main';
    }
  }
`;

export default GlobalStyles;
