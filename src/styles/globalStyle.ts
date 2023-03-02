import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: "sans-serif";
    }
`;

export default GlobalStyle;