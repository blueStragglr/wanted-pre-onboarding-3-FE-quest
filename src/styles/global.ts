import { css } from '@emotion/css'
import resetCss from '@styles/reset'

const globalCss = css`
    ${resetCss}

    * {
        box-sizing: border-box;
    }
`

export default globalCss
