import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

type Props = {
  handleChangePage: (page: "Home" | "A" | "B" | "C") => void;
};

function Header({ handleChangePage }: Props) {
  return (
    <header
      css={css`
        padding: 20px;
        border-bottom: 1px solid #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <h1 onClick={() => handleChangePage('Home')}>
        <Link to="/">Wanted Pre-onboarding course </Link>
      </h1>
      <button
        css={css`
          width: 100px;
          height: 50px;
          border-radius: 20px;
          border: 1px solid #000;
          cursor: pointer;
        `}
      >
        <Link to="/signin">Login</Link>
      </button>
    </header>
  );
}

export default Header;
