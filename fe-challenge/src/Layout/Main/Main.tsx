/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import { css } from "@emotion/react";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main
      css={css`
        width: 100%;
        height: calc(100vh - 30px);
        color: aquamarine;
      `}
    >
      {children}
    </main>
  );
};

export default Main;
