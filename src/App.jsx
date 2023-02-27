import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { PageA, PageB, PageC, Login } from './pages';

const App = () => {
    return(
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<PageA/>} />
                <Route path="/b" element={<PageB/>} />
                <Route path="/c" element={<PageC/>} />
            </Routes>
    )
}

export default App;