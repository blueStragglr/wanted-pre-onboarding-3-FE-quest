import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
  @font-face {
      font-family: 'GmarketSansMedium';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
}
body{
  background-color: #ffffff;
}
a {
  color: inherit;
  text-decoration: none;
}
input, button {
  background-color: transparent;
  font-family: "GmarketSansMedium";
  outline: none;
}
h1, h2, h3, h4, h5, h6{
  font-family:'Maven Pro', sans-serif;
}
ol, ul, li {
  list-style: none;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
div{
  font-family: "GmarketSansMedium";
}

`;
