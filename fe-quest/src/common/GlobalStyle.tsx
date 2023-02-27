import { Global, css } from "@emotion/react";

export default function GlobalStyle() {
    return (
        <Global
            styles={css`
                * {
                    font-family: monospace;
                }
            `}
        />
    )
}