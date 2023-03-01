import {BrowserRouter, Routes, Route} from 'react-router-dom'
import * as P from '../components/Page'
import {Layout} from '../components/Layout'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/a" element={<P.PageA />} />
          <Route path="/b" element={<P.PageB />} />
          <Route path="/c" element={<P.PageC />} />
        </Route>
        <Route path="/login" element={<P.Login />} />
      </Routes>
    </BrowserRouter>
  )
}
