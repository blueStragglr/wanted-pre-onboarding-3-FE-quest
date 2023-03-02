/** @jsxImportSource @emotion/react */

import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      /* Reset styles */
      * {
        box-sizing: border-box;
      }
      html,
      body,
      #root {
        /* height: 100%; */
      }
      body {
        margin: 0;
        padding: 0;
        font-family: "Noto Sans KR", sans-serif;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: 0;
      }
      a {
        color: #333;
        text-decoration: none;
      }
    `}
  />
);
