import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layouts'
import { Home, Login, PageA, PageB, PageC } from './routes'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/page-a' element={<PageA />} />
        <Route path='/page-b' element={<PageB />} />
        <Route path='/page-c' element={<PageC />} />
      </Route>
      <Route path='/Login' element={<Login />} />
    </Routes>
  )
}

export default App
