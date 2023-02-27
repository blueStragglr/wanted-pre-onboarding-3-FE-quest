import { css, Global } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
};

export default GlobalStyles;
