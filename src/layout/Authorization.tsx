import React from 'react';
import Layout from './Layout';

interface AuthorizationProps {
  children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
  // 라우터에서 인증절차가 필요한 페이지는 이 레이아웃 컴포넌트를 거쳐가게 함. 인증절차를 여기에 구현하면 됨
  return (
    <>
      <Layout>
        로그인해야댐
        {children}
      </Layout>
    </>
  );
};

export default Authorization;
