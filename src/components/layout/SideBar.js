import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCookie, removeCookie } from "../../util/cookie";

const SideBar = () => {
  const navigate = useNavigate()
  const token = getCookie('login')
  const [loginState, setLoginState] = useState(token);

  useEffect(() => {
    token ? setLoginState(true) : setLoginState(false)
  }, [token, loginState]);

  return (
    <Container>
      {loginState
        ? <button className="login" onClick={() => {
          removeCookie('login')
          setLoginState(false);
          alert('로그아웃되었습니다.')
        }}>로그아웃</button>
        : <button className="login" onClick={() => navigate('/login')}>로그인</button>}
      <div className="text">
        <Link to='/'><span>메인페이지</span></Link>
        <Link to='/a'><span>Page A</span></Link>
        <Link to='/b'><span>Page B</span></Link>
        <Link to='/c'><span>Page C</span></Link>
      </div>
    </Container>
  )
};

const Container = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  background-color: royalblue;
  left: 0;

  .login {
    margin: 30px auto 0;
  }

  .text {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 22px;
    font-weight: 600;

    span {
      :hover {
        color: orange;
      }
    }
  }
`

export default SideBar;
