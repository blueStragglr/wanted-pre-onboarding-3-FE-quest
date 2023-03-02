import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageA from '../pages/PageA';
import PageB from '../pages/PageB';
import PageC from '../pages/PageC';


function Pages() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/pageA" element={<PageA />}></Route>
                <Route path="/pageB" element={<PageB />}></Route>
                <Route path="/pageC" element={<PageC />}></Route>
            </Routes>
        </main>
    )
}

export default Pages;