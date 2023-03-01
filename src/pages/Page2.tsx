import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Page2 = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='page-box'>
      두 번째 페이지입니다.
      <button className='main-btn' onClick={() => navigate('/')}>
        메인으로 돌아가기
      </button>
    </div>
  );
};

export default Page2;
