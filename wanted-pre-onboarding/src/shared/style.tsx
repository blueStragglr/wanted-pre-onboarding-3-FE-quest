import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        body {
          font-family: "Noto Sans KR", sans-serif;
          background-color: #ffffff;
        }
        a {
          text-decoration: none;
          color: #ffffff;
        }
        button {
          font-family: "Noto Sans KR", sans-serif;
        }
        input {
          font-family: "Noto Sans KR", sans-serif;

          :focus {
            outline: none;
          }
        }
      `}
    />
  );
}

export default GlobalStyle;
