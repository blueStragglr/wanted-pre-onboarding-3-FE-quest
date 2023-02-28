import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        margin: 0;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
