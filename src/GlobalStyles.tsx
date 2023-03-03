import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
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
    padding-top: 50px;
  }
  #root {
    overflow: hidden;
  }
`;

export default globalStyles;
