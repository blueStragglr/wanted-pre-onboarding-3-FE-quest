import { css } from "@emotion/react";

interface Props {
  [key: string]: unknown;
}

function Detail(props: Props): JSX.Element {
  return (
    <main
      css={css`
        margin-left: 200px;
        display: flex;
        height: 1024px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
      id="detail"
      {...props}
    />
  );
}

export default Detail;
