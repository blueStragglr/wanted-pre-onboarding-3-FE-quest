import { css, Global } from "@emotion/react";
import reset from "emotion-reset";
import { colorBasicBlack } from "./commonColor";

const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Yeon+Sung&display=swap");

  @font-face {
    font-family: "GmarketSans";
    font-weight: 500;
    font-style: normal;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot");
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.ttf")
        format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "GmarketSans";
    font-weight: 700;
    font-style: normal;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot");
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff")
        format("woff"),
      url("https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.ttf")
        format("truetype");
    font-display: swap;
  }

  ${reset}
  html.fixed {
    position: fixed;
    overflow-y: scroll;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
  body {
    font-family: "GmarketSans", "Nanum Gothic", sans-serif;
    font-size: 16px;
    line-height: 1;
    color: ${colorBasicBlack};
    position: relative;
  }

  button {
    cursor: pointer;
    background-color: inherit;
    border: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  input,
  textarea {
    outline: none;
    border: 1px solid rgb(180, 180, 180);
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
