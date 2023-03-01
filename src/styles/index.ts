import { createGlobalStyle } from "styled-components";

import fonts from "./base/fonts";
import reset from "./base/reset";
import more from "./base/more";

const GlobalStyle = createGlobalStyle`
${fonts}
${reset}
${more}

`;

export default GlobalStyle;
