import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 auto;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-size: 100%;
  }

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;

    :hover {
      text-decoration: none;
      color: #000;
    }
  }

  li {
    list-style: none;
  }
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  input {
    border: 1px solid lightgray;
    :focus {
      outline: none;
    }
  }
`;
