import { css } from "@emotion/react";

function PageC() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        color: skyblue;
      `}
    >
      <h2>This is Page C</h2>
    </div>
  );
}

export default PageC;
