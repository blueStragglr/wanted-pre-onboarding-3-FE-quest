import { Global } from '@emotion/react'
import globalCss from '@styles/global'

function App() {
    return (
        <>
            <Global styles={globalCss} />
            <div>hello</div>
        </>
    )
}

export default App
