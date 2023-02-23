import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='font-semibold text-xl bg-cyan-100'>
            <Link to = "/a" ><h3 className='h-20 flex items-center justify-center hover:bg-red-400 hover:text-white'>Page A</h3></Link>
            <Link to = "/b"><h3 className='h-20 flex items-center justify-center hover:bg-red-400 hover:text-white'>Page B</h3></Link>
            <Link to = "/c"><h3 className='h-20 flex items-center justify-center hover:bg-red-400 hover:text-white'>Page C</h3></Link>
        </div>
    );
};

export default SideBar;