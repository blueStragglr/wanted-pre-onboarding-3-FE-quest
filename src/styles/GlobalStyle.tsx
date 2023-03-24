// src/styles/global

import React from "react";
import { css, Global } from "@emotion/react";
const style = css`
  html {
    font-size: 16px;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
  a {
    color: #000;
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:active {
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
