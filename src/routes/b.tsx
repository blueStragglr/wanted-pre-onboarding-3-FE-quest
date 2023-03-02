import { css } from '@emotion/react'
import theme from '@styles/theme'

export default function B() {
    return <h1 css={wrapperCss}>This is Page B!</h1>
}

const wrapperCss = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${theme.colors.blue};
`
