import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol {
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  #root{
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
