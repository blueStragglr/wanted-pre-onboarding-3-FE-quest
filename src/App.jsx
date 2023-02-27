import {Route, Routes, Navigate} from 'react-router-dom';
import { PageA, PageB, PageC, Login } from './pages';
import Layout from './components/layouts/Layout';

const App = () => {
    return(
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout><PageA /></Layout>} />
                <Route path="/b" element={<Layout><PageB /></Layout>} />
                <Route path="/c" element={<Layout><PageC /></Layout>} />
            </Routes>
    )
}

export default App;