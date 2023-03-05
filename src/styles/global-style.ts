import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    display: block;
    text-decoration: none;
    color: #333;
  }
`

export default GlobalStyle;