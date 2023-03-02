import { css } from '@emotion/react'
import theme from '@styles/theme'
import { useRouteError } from 'react-router-dom'

type RouteError = {
    status: number
    statusText?: string
    message?: string
}

export default function ErrorPage() {
    const error = useRouteError() as RouteError
    console.error(error)

    return (
        <div css={wrapperCss}>
            <div css={contentCss}>
                <h1>Oops!</h1>
                <p>죄송합니다, 예상치 못한 오류가 발생했습니다.</p>
                <p>
                    <i>
                        {error.status} - {error.statusText || error.message}
                    </i>
                </p>
            </div>
        </div>
    )
}

const wrapperCss = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const contentCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    padding: 100px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    background-color: ${theme.colors.ivory};

    h1 {
        font-weight: bold;
    }

    i {
        color: ${theme.colors.darkGray};
    }
`
