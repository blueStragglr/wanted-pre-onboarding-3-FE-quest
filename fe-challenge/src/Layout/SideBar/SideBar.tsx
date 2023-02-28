/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SideBar = () => {
  return (
    <aside
      css={css`
        width: 250px;
        height: calc(100vh - 30px);
        border-right: 1px solid #000000;
        background-color: aliceblue;
      `}
    ></aside>
  );
};

export default SideBar;
