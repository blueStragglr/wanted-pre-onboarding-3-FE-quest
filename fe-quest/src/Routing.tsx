import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {MainLayout} from './components'
import { MainPage, PageA, PageB, PageC } from './pages';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="" element={<MainPage/>}/>
                    <Route path="page-a" element={<PageA/>}/>
                    <Route path="page-b" element={<PageB/>}/>
                    <Route path="page-c" element={<PageC/>}/>
                </Route>
            </Routes>
        </Router>
    )
}