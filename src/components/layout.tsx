import Divider from '@components/divider'
import Header from '@components/header'
import Sidebar from '@components/sidebar'
import { css } from '@emotion/react'
import theme from '@styles/theme'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header />
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

const bodyCss = css`
    display: flex;
    height: calc(100% - 61px);
`

const mainCss = css`
    width: 100%;
`
