import { css } from "@emotion/react";

const reset = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  button,
  textarea,
  input {
    font-family: inherit;
    font-size: 16px;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    box-shadow: none;
    outline: none;
  }

  ul,
  ol,
  li {
    list-style-type: none;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
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

  body {
    line-height: 1;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    width: 100%;
    border: none;
    padding: 0;
    font: inherit;
  }

  .ir_text {
    display: block;
    overflow: hidden;
    position: absolute;
    text-indent: -9999px;
    line-height: 0;
    font-size: 1px;
    color: transparent;
  }
`;

export default reset;
