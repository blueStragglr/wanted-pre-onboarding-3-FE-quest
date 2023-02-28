/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import { css } from "@emotion/react";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 30px);
        color: #2c49c9;
      `}
    >
      {children}
    </main>
  );
};

export default Main;
