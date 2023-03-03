import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'
import URLMap from '@/constants/URLMap'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path={URLMap.PageA} element={<PageA />} />
        <Route path={URLMap.PageB} element={<PageB />} />
        <Route path={URLMap.PageC} element={<PageC />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
