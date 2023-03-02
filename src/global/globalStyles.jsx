import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "@/global/fonts.css";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    --color-primary: #101A2F;
    --color-point: #BAF992;
    --color-point-dark: #408A11;
    --color-light: #EFFFE4;
    --color-white: #FFFFFF;
    --color-blue: #7588B1;
    .page {
      color: var(--color-primary);
      width: 100%;
      background-color: var(--color-white);
      border-radius: 20px;
      position: relative;
    }
    ::selection {
      background-color: var(--color-primary);
      color: var(--color-point);
    }
    input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active { transition: background-color 5000s ease-in-out 0s; }
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
