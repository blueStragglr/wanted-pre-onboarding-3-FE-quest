import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 10px;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  
  #root {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
`;

export default GlobalStyle;
