import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* font cdn */
  @import url('https://fonts.googleapis.com/css?family=Mukta:400,500,600,700,800&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean');
  @import url("https://fonts.googleapis.com/css?family=Pacifico");
  @import url("//fonts.googleapis.com/earlyaccess/jejumyeongjo.css");
  @font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  /* 리셋 css */
  * {
    margin:0;padding:0;border:0;
  }
  html, 
  body {
    width:100%; 
    font-size: calc( 12px + 0.4vw ); 
    font-family:'Noto Sans KR', sans-serif;
    text-align: center;
    font-weight: 100;
    text-align: center;
  }
  html, 
  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6, 
  form, 
  fieldset, 
  img {
    margin:0;
    padding:0;
    border:0;
  }
  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    font-family:'Noto Sans KR', sans-serif;
    font-size:1rem;
    font-weight: 100;
  }
  article, 
  aside, 
  details, 
  figcaption, 
  figure, 
  footer, 
  header, 
  hgroup, 
  menu, 
  nav, 
  section {
    display:block;
  }

  ul, 
  dl,
  dt,
  dd {
    margin:0;
    padding:0;
    list-style:none;
  }
  legend {
    position:absolute;
    margin:0;
    padding:0;
    font-size:0;
    line-height:0;
    text-indent:-9999em;
    overflow:hidden;
  }
  label, 
  input, 
  button, 
  select, 
  img {
    vertical-align:middle;
    font-size:1em;
  }
  input, 
  button {
    margin:0;
    padding:0;
    font-family:'Noto Sans KR', sans-serif;
    font-size:1em;
  }
  input[type="submit"] {
    cursor:pointer
  }
  button {
    cursor:pointer
  }
  textarea, 
  select {
    font-family:'Noto Sans KR', sans-serif;
    font-size:1em;
  }
  select {
    margin:0;
  }
  p {
    margin:0;
    padding:0;
    word-break:break-all;
  }
  hr {
    display:none;
  }
  pre {
    overflow-x:scroll;
    font-size:1.1em;
  }
  a {
    color:#000;
    text-decoration:none;
  }
  a:hover {
    color:#000;
    text-decoration:none;
  }
  *, :after, :before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
`;

export default GlobalStyle;
