import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import GlobalStyles from "./styles/global-style"
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'

function App() {

  return (
    <div className="App">
        <GlobalStyles />
        <Layout>
        <Routes>
          <Route path="/a" element={<PageA />}/>
          <Route path="/b" element={<PageB />}/>
          <Route path="/c" element={<PageC />}/>
        </Routes>
        </Layout>
      </div>
  )
}

export default App
