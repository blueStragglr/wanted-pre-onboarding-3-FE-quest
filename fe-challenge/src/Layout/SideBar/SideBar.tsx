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
      `}
    >
      <Link
        to={"/pagea"}
        css={css`
          ${location.pathname == "/pagea" && "color: #2c49c9blue"}
        `}
      >
        Page A
      </Link>
      <Link
        to={"/pageb"}
        css={css`
          ${location.pathname == "/pageb" && "color: #2c49c9"}
        `}
      >
        Page B
      </Link>
      <Link
        to={"/pagec"}
        css={css`
          ${location.pathname == "/pagec" && "color: #2c49c9"}
        `}
      >
        Page C
      </Link>
    </aside>
  );
};

export default SideBar;
