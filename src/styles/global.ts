import { css } from '@emotion/react'
import resetCss from '@styles/reset'

const globalCss = css`
    ${resetCss};

    * {
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 20px;
    }
    h4 {
        font-size: 16px;
    }
    h5 {
        font-size: 14px;
    }
    h6 {
        font-size: 12px;
    }

    i {
        font: revert;
    }
`

export default globalCss
