import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layouts'
import { Home, Login } from './routes'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/Login' element={<Login />} />
    </Routes>
  )
}

export default App
