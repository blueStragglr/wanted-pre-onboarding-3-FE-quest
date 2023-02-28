/** @jsxImportSource @emotion/react */
import { Link, useLocation } from "react-router-dom";
import { css } from "@emotion/react";

const SideBar = () => {
  const location = useLocation();
  return (
    <aside
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 250px;
        height: calc(100vh - 30px);
        padding: 20px;
        border-right: 1px solid #000000;
        background-color: aliceblue;
      `}
    >
      <Link
        to={"/pagea"}
        css={css`
          padding: 15px 50px;
          border: 1px solid blueviolet;
          ${location.pathname == "/pagea" && "background-color: pink"}
        `}
      >
        Page A
      </Link>
      <Link
        to={"/pageb"}
        css={css`
          padding: 15px 50px;
          border: 1px solid blueviolet;
          ${location.pathname == "/pageb" && "background-color: pink"}
        `}
      >
        Page B
      </Link>
      <Link
        to={"/pagec"}
        css={css`
          padding: 15px 50px;
          border: 1px solid blueviolet;
          ${location.pathname == "/pagec" && "background-color: pink"}
        `}
      >
        Page C
      </Link>
    </aside>
  );
};

export default SideBar;
