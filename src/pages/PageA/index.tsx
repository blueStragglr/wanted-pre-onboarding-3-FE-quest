/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PageTemplate from "../../common/PageTemplate";

function PageA() {
  return (
    <PageTemplate header="welcome">
      <div css={pageACss}>This is Page A!!</div>
    </PageTemplate>
  );
}

const pageACss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 20px;
  color: #0054db;
`;

export default PageA;
