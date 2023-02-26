import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CmnLayout from '../layout/CmnLayout'
import LoginPage from '../pages/LoginPage'
import NotFound from '../pages/NotFound'
import PageA from '../pages/PageA'
import PageB from '../pages/PageB'
import PageC from '../pages/PageC'

const CmnRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CmnLayout />}>
          <Route path='/pageA' element={<PageA />} />
          <Route path='/pageB' element={<PageB />} />
          <Route path='/pageC' element={<PageC />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default CmnRouter
