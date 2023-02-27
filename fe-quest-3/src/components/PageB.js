import React from 'react';
import { useLocation } from 'react-router-dom';
import Utils from '../common/Utils';


const PageB = () => {
    const location = useLocation().search;
    // console.log('location',location);
    const needPermit = Utils.checkAuth(location);

    return (
        <div>
            {needPermit ? (<p>로그인을 해주세요</p>): (<p>This is Page B!</p>)
            }
            
        </div>
    );
};

export default PageB;