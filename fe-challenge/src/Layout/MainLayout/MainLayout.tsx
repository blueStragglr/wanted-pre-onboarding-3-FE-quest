/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";

const Mainlayout = () => {
  return (
    <div
      css={css`
        display: flex;
        width: auto;
      `}
    >
      <SideBar />
      <Main />
    </div>
  );
};

export default Mainlayout;
