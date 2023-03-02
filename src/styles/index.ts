import { createGlobalStyle } from 'styled-components'

import fonts from './base/fonts'
import reset from './base/reset'
import more from './base/more'

const GlobalStyle = createGlobalStyle`
${fonts}
${reset}
${more}

html, body ,#root {
  height: 100%;
  width: 100%;
}
`

export default GlobalStyle
