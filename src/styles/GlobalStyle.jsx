import { createGlobalStyle } from 'styled-components';

// 웹 전체 스타일 설정
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  a{
    text-Decoration: none;
    color: black; 
  }

`;

export default GlobalStyle;
