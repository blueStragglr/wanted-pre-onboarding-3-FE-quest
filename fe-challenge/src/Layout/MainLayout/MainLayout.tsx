/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";
import { css } from "@emotion/react";

const Mainlayout = () => {
  return (
    <>
      <Header />
      <div
        css={css`
          display: flex;
          width: auto;
        `}
      >
        <SideBar />
        <Main>
          <Outlet />
        </Main>
      </div>
    </>
  );
};

export default Mainlayout;
