import React from 'react'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import { BrowserRouter } from 'react-router-dom'
import RenderRouter from './routes'
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
