import { css } from "@emotion/react";

function PageB() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        color: skyblue;
      `}
    >
      <h2>This is Page B</h2>
    </div>
  );
}

export default PageB;
