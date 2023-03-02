import { css } from '@emotion/react'
import theme from '@styles/theme'
import { Link } from 'react-router-dom'

export default function LogoLink() {
    return (
        <Link to="/">
            <h3 css={textCss}>Wanted Pre-onboarding course</h3>
        </Link>
    )
}

const textCss = css`
    font-weight: bold;
    color: ${theme.colors.black};
`
