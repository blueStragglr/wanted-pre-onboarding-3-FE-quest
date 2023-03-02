/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PageTemplate from "../../common/PageTemplate";

function PageB() {
  return (
    <PageTemplate header="welcome">
      <div css={pageBCss}>This is Page B!!</div>
    </PageTemplate>
  );
}

const pageBCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 20px;
  color: #0054db;
`;

export default PageB;
