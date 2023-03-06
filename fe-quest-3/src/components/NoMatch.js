import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
    const location = useLocation().pathname;
    return (
        <div>
            <p>요청하신 페이지가 없습니다.🧐</p>
            <p>입력하신 경로가 <code>{location}</code> 가 맞는지 확인해주세요~</p>
            
        </div>
    );
};

export default NoMatch;