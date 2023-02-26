import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const userLoggedIn = localStorage.getItem('email');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(userLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(false);
    localStorage.removeItem('email');
    navigate('/');
  };

  useEffect(() => {
    if (isUserLoggedIn === false) {
      alert('로그아웃하였습니다.');
      window.location.reload();
    }
  }, [userLoggedIn]);

  return (
    <NavContainer>
      <NavWrapper>
        <NavTitle>Wanted Pre on-boarding Course</NavTitle>
        <NavLogin>
          <Link className="navigate" to="/login">
            {isUserLoggedIn ? (
              <span onClick={handleLogout}>LOGOUT</span>
            ) : (
              <span>LOGIN</span>
            )}
          </Link>
        </NavLogin>
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;

const NavLogin = styled.div`
  display: flex;
  justify-content: center;

  width: 30%;
  height: auto;

  .navigate {
    text-decoration: none;
    margin-right: 2rem;

    &:hover {
      color: orange;
    }
  }
`;

const NavTitle = styled.div`
  display: flex;
  justify-content: start;

  width: 70%;
  height: auto;

  font-weight: 700;
`;

const NavWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const NavContainer = styled.header`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 10vh;

  padding: 2rem 1rem;

  font-size: 3rem;

  background-color: #e0e0e0;
`;
