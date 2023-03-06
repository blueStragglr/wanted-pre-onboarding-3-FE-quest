import React from 'react';
import { useLocation } from 'react-router-dom';
import Utils from '../common/libs/Utils';

const PageA = () => {
    const location = useLocation().search;
    const needPermit = Utils.checkAuth(location);

    return (
        <div>
            {needPermit ? (<p>로그인을 해주세요</p>): (<p>This is Page A!</p>)
            }
            
        </div>
    );
};

export default PageA;