import LogoLink from '@components/logo-link'
import { css } from '@emotion/react'
import theme from '@styles/theme'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header css={headerCss}>
            <LogoLink />
            <div css={linkWrapperCss}>
                <Link to="/sign-in">로그인</Link>
                <Link to="/sign-up">회원가입</Link>
            </div>
        </header>
    )
}

const headerCss = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 25px;

    h3 {
        font-weight: bold;
    }
`

const linkWrapperCss = css`
    display: flex;
    gap: 10px;

    a {
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%);
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};
        transition: 0.2s;

        :hover {
            transform: translateY(5px);
            box-shadow: none;
        }
    }
`
