/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Header = () => {
  return (
    <header
      css={css`
        width: auto;
        height: 30px;
        border-bottom: 1px solid #000000;
        color: pink;
        background-color: aliceblue;
      `}
    >
      <h1
        css={css`
          font-size: 16px;
        `}
      >
        Wanted Pre-onboarding course
      </h1>
    </header>
  );
};

export default Header;
