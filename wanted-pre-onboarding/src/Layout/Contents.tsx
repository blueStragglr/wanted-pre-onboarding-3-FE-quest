import React from "react";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import PageA from '../pages/PageA';
import PageB from '../pages/PageB';
import PageC from '../pages/PageC';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'
const Contents = ()=>{
    return(

    
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pageA' element={<PageA />} />
                <Route path='/pageB' element={<PageB />} />
                <Route path='/pageC' element={<PageC />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
 
    )
}

export default Contents;