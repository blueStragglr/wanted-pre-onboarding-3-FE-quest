import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    background-color: #f7f7f7;
  }
  @font-face {
      font-family: 'SCoreDream';
      font-weight: normal; 
      font-style: normal; 
      src: url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff2) format('woff2'),
          url(https://cdn.jsdelivr.net/gh/webfontworld/SCoreDream/SCoreDream4.woff) format('woff');
      font-display: swap;
  }
  body {
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
    font-family: 'SCoreDream', sans-serif;
    font-size: 16px;
    position: relative;
    padding-top: 70px;
    padding-left: 300px;
    box-sizing: border-box;
  }
  h1 {
    font-size: 50px;
    margin: 25px 0 0;
    font-weight: 600;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    display: flex;
    width: 130px;
    height: 60px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    font-size: 16px;
    font-weight: bold;

    :hover {
      background-color: navy;
    }
  };
  input {
    display: flex;
    outline: none;
    height: 50px;
    padding-left: 20px;
    border: 1px solid gray;
    border-radius: 8px;
    &::placeholder {
      color: royalblue;
    }
  }
  ::selection {
    color: white;
    background-color: gray;
  }
  select {
    height: 40px;
    padding: 10px;
    border-radius: 8px;
    font-size: 15px;

    :focus {
     outline: none;
    }
  }
  }
`;

export default GlobalStyles;