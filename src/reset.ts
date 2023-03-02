import { css } from "@emotion/react";

const resetCss = css`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    font: inherit;
    font-size: 100%;
    color: inherit;

    :focus {
      outline: none;
    }
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  iframe {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }

  b,
  strong {
    font-weight: bold;
  }

  img {
    display: block;
    border: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    overflow: visible;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  fieldset {
    border: none;
  }

  input,
  textarea {
    appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
  }
`;

export default resetCss;
