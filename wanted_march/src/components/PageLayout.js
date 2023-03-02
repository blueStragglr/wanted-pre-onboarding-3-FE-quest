import React from 'react';
import Header from '../components/Header.js';
import SideBar from '../components/SideBar.js';

const PageLayout = ({nav, children}) => {

    return (
        <div>
            <Header />
            <div className="wanted-march-body">
                <SideBar isActive={nav} />
                <div className="wanted-march-body__contents">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageLayout;