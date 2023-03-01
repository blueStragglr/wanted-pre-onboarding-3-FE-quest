import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Page1 = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      첫 번째 페이지입니다.
      <button onClick={() => navigate('/')}>메인으로 돌아가기</button>
    </div>
  );
};

export default Page1;
