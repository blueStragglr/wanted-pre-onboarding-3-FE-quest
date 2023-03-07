import React from 'react'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout'
import { ROUTERPATH } from './constants/path'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'
import LoginPage from './pages/LoginPage'
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path={ROUTERPATH.LOGIN} element={<LoginPage />} />
            <Route element={<Layout />}>
              <Route path={ROUTERPATH.PAGEA} element={<PageA />} />
              <Route path={ROUTERPATH.PAGEB} element={<PageB />} />
              <Route path={ROUTERPATH.PAGEC} element={<PageC />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
