import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';
import Modal from './Modal';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd;

  h1 {
    margin: 0;
  }
`;

const Button = styled.button`
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Contents = styled.section`
  width: 80%;
  float: right;
  padding: 1rem;
`;

const Layout = ({ children, path, withAuth }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin && withAuth) {
      alert('로그인 페이지로 이동합니다');
    }
    navigate('/');
  }, []);

  const login = (e) => {
    e.preventDefault();
    setIsModal(true);
  };

  return (
    <div>
      <Nav>
        <h1>Wanted pre-onboarding</h1>
        <Button onClick={login}>Login</Button>
      </Nav>
      <SideBar />
      <Contents>{children}</Contents>

      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} />}
    </div>
  );
};
export default Layout;
