import { css } from '@emotion/react'
import theme from '@styles/theme'
import { NavLink, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const { pathname } = useLocation()

    const isIndexActive = ['/', '/a'].includes(pathname)

    return (
        <nav css={sidebarCss}>
            <ul css={menuListCss}>
                <li>
                    <NavLink to="a" css={linkCss} style={() => activeStyle({ isActive: isIndexActive })}>
                        Page A
                    </NavLink>
                </li>
                <li>
                    <NavLink to="b" css={linkCss} style={activeStyle}>
                        Page B
                    </NavLink>
                </li>
                <li>
                    <NavLink to="c" css={linkCss} style={activeStyle}>
                        Page C
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

type ActiveClassNameParams = { isActive: boolean }

const activeStyle = ({ isActive }: ActiveClassNameParams) => {
    return isActive ? { fontWeight: 'bold', color: theme.colors.blue } : undefined
}

const sidebarCss = css`
    width: 300px;
`

const menuListCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const linkCss = css`
    display: block;
    padding: 20px 25px;
    color: ${theme.colors.black};
`
