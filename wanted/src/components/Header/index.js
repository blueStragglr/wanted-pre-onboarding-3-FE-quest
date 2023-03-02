/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const headerStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 3;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-weight: bold;
  font-size: 20px;
`;

const Header = () => {
  return <header css={headerStyle}>Wanted Pre-onboarding Course</header>;
};

export default Header;
