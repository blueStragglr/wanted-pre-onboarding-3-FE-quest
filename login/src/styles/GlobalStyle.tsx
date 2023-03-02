import { Global, css } from "@emotion/react";

const style = css`
  * {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default function GlobalStyle(): JSX.Element {
  return <Global styles={style} />;
}
