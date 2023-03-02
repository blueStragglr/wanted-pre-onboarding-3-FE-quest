import { Global } from '@emotion/react'
import Router from '@routes/router'
import globalCss from '@styles/global'

function App() {
    return (
        <>
            <Global styles={globalCss} />
            <Router />
        </>
    )
}

export default App
