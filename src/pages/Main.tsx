import { css } from "@emotion/react";

function Main() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        color: skyblue;
      `}
    >
      <h2>This is Main Page</h2>
    </div>
  );
}

export default Main;
