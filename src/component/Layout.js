import React from 'react';
import SideBar from './Nav/SideBar';
import Header from './Nav/Header';
import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className='flex'>
                <div className='w-1/6 h-screen border-r-4 text-center flex flex-col'>
                    <SideBar/>
                </div>
                <div className='flex justify-center items-center flex-1 '>
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default Layout;