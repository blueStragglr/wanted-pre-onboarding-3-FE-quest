import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Main from '../../route/index'
import { GlobalStyleReset } from '../../GlobalStyles'
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyleReset />
      <Header />
      <SideBar />
      <Main />
    </BrowserRouter>
  )
}

export default App
