import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Nav } from './Nav';

export const Navigation = () => {

    return (
        <div className='container'>
            <Header />

            <div className='bodyContainer'>
                <Nav />
                <Outlet />
            </div>
        </div>
    )
}