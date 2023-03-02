/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MenuItem from "../MenuItem";

function SideBar() {
  return (
    <div css={sideBarCss}>
      <ul>
        <MenuItem to="/page-a">Page A</MenuItem>
        <MenuItem to="/page-b">Page B</MenuItem>
        <MenuItem to="/page-c">Page C</MenuItem>
      </ul>
    </div>
  );
}

const sideBarCss = css`
  width: 12rem;
  height: 100vh;
  padding: 40px 0 40px 40px;
  border-right: 1px solid;
`;

export default SideBar;
