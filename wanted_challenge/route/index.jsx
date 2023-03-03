import React from 'react'
import { Contents } from './styles'
import { Routes, Route } from 'react-router'
import Page1 from '../pages/Page1/index'
import Page2 from '../pages/Page2/index'
import Page3 from '../pages/Page3/index'
const Main = () => {
  return (
    <Contents>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page/page1' element={<Page1 />} />
        <Route path='/page/page2' element={<Page2 />} />
        <Route path='/page/page3' element={<Page3 />} />
      </Routes>
    </Contents>
  )
}

export default Main
