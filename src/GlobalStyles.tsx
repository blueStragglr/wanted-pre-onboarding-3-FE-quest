import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit
  }
  body {
    font-family: NanumGothic;
  }
  #root {
    overflow: hidden;
  }
`;

export default GlobalStyles;
