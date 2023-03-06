import { css } from "@emotion/react";

function PageA() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        color: skyblue;
      `}
    >
      <h2>This is Page A</h2>
    </div>
  );
}

export default PageA;
