import { css } from '@emotion/react'
import theme from '@styles/theme'

export default function C() {
    return <h1 css={wrapperCss}>This is Page C!</h1>
}

const wrapperCss = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${theme.colors.blue};
`
