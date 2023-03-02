import Divider from '@components/divider'
import Sidebar from '@components/sidebar'
import { css } from '@emotion/react'
import theme from '@styles/theme'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <header css={headerCss}>
                <h3>Wanted Pre-onboarding course</h3>
            </header>
            <Divider size="1px" color={theme.colors.gray} />
            <div css={bodyCss}>
                <Sidebar />
                <Divider position="vertical" size="1px" color={theme.colors.gray} />
                <main css={mainCss}>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

const headerCss = css`
    padding: 20px 25px;

    h3 {
        font-weight: bold;
    }
`

const bodyCss = css`
    display: flex;
    height: calc(100% - 61px);
`

const mainCss = css`
    width: 100%;
`
