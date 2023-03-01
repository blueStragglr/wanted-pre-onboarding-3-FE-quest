import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './webpages/LoginPage'
import Layout from './webpages/Layout'
import PageA from './webpages/PageA'
import PageB from './webpages/PageB'
import PageC from './webpages/PageC'
import NotFound from './webpages/NotFound'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/home' element={<Layout />}>
                    <Route index element={<PageA />} />
                    <Route path='pageb' element={<PageB />} />
                    <Route path='pagec' element={<PageC />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;