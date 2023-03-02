import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        font-family: -apple-system, Segoe UI, Roboto, sans-serif;
        font-weight: bold;
    }
    button{
        background-color: #1d78b6;
        border: 1px solid #9f9f9f;
        color: #ffffff;
        cursor: pointer;
    }
`;

export default GlobalStyle;
