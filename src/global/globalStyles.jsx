import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.css";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    --color-primary: #101A2F;
    --color-point: #BAF992;
    --color-light: #EFFFE4;
    --color-white: #FFFFFF;
    --color-blue: #7588B1;
    --width-inner: 80%;
  }

  body {
    font-family : "Prompt", -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-primary);
  }
`;

export default GlobalStyles;
