import { createGlobalStyle } from 'styled-components'

export const GlobalStyleReset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  ol, ul {
    list-style: none;
  }

  button {
    border: none;
    background-color: #fff;
    box-sizing: border-box;
  }
  
  input {
    border: none;
    background-color: #fff;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    &:visited {
      color: #000;
    }
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`
