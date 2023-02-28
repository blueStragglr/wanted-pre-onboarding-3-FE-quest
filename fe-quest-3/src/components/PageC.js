import React from 'react';
import { useLocation } from 'react-router-dom';
import Utils from '../common/libs/Utils';

const PageC = () => {
    const location = useLocation().search;
    // console.log('location',useLocation());
    const needPermit = Utils.checkAuth(location);

    return (
        <div>
            {needPermit ? (<p>로그인을 해주세요</p>): (<p>This is Page C!</p>)
            }
            
        </div>
    );
};

export default PageC;