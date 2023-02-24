import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navigation } from '../component/Common/Navigation';
import { Login } from '../component/Page/Login';
import { Page1 } from '../component/Page/Page1';
import { Page2 } from '../component/Page/Page2';
import { Page3 } from '../component/Page/Page3';
import { Page4 } from '../component/Page/Page4';

export const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation />} >
                        <Route path="/page1" element={<Page1 />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/page3" element={<Page3 />} />
                        <Route path="/page4" element={<Page4 />} />
                    </Route>
                    <Route path="/login" element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}