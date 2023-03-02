import LogoLink from '@components/logo-link'
import { css } from '@emotion/react'
import theme from '@styles/theme'
import { Link } from 'react-router-dom'

export default function SignIn() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('sign in submit')
    }

    return (
        <div css={wrapperCss}>
            <LogoLink />
            <form css={contentCss} onSubmit={onSubmit}>
                <h2 css={titleCss}>로그인</h2>
                <div css={inputWrapperCss}>
                    <label htmlFor="username">아이디</label>
                    <input id="username" />
                </div>
                <div css={inputWrapperCss}>
                    <label htmlFor="password">비밀번호</label>
                    <input id="password" />
                </div>
                <div css={buttonWrapperCss}>
                    <button>로그인</button>
                    <Link to="/sign-up">회원가입</Link>
                </div>
            </form>
        </div>
    )
}

const wrapperCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 100%;
`

const contentCss = css`
    padding: 20px;
    width: 500px;
    height: 400px;
    position: relative;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: ${theme.colors.ivory};
`

const titleCss = css`
    font-weight: bold;
`

const inputWrapperCss = css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 50px;
`

const buttonWrapperCss = css`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 30px;
    position: absolute;
    right: 40px;
    bottom: 40px;

    button,
    a {
        display: flex;
        align-items: center;
        justify-content: center;
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
