import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

type Props = {};

const Page3 = (props: Props) => {
  const navigate = useNavigate();
  const isLogin = useSelector((state: any) => state.auth.id);
  return isLogin ? (
    <div>
      세 번째 페이지입니다. 로그인을 하셨군요! 😋
      <button onClick={() => navigate('/')}>메인으로 돌아가기</button>
    </div>
  ) : (
    <Navigate to='/login' replace={true} />
  );
};

export default Page3;
