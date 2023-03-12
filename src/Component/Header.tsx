import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getCurrentUserInfo } from "../Api/login";
import { UserInfo } from "../types/user";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { DeleteAccessTokenFormLocalStorage } from "../utils/accessTokenHandler";
import { useSetRecoilState } from "recoil";
import { isLogined } from "../Recoil/atoms";

const TopNavigationBar = styled.h1`
  font-size: 20px;
  font-style: italic;
  color: black;
  padding: 20px;
  border-bottom: 2px solid gray;
  font-weight: bold;
  div {
    position: absolute;
    top: 10px;
    right: 30px;
    a {
      margin-right: 5px;
      font-size: 15px;
    }
  }
`;

const WelcomeBox = styled.span`
  margin-top: 15px;
  margin-right: 5px;
`;

const Span = styled.span`
font-size:13px;
&:hover {
  cursor:pointer;
}
`

function Header() {
  const [user, setUserInfo] = useState<UserInfo | null>(null)
  const isDataFetched = useRef(false)
  const setisLogin = useSetRecoilState(isLogined);
  const toggleDarkAtom = () => setisLogin((prev) => {
    if(prev === true) return false
    return false
  });

  const getUserInfo = useCallback (async () => {

    const userInfo = await getCurrentUserInfo()
    setUserInfo(userInfo)

    isDataFetched.current = true
  }, [])

  useEffect(() => {
    if (isDataFetched.current) return
    getUserInfo()
  }, [])

  const removeToken =() =>{
    DeleteAccessTokenFormLocalStorage()
    setUserInfo(null)
    toggleDarkAtom()
  }
  return (
    <>
      <TopNavigationBar>
        Wanted pre-onboarding-course
        <div>
          <WelcomeBox>{user?.name}님 환영합니다.</WelcomeBox>
          <Link to={{ pathname: `/` }}>Home</Link>
          <Link to={{ pathname: `/login` }}>Login</Link>
          <Span onClick={removeToken} >LogOut</Span>
        </div>
      </TopNavigationBar>
    </>
  );
}

export default Header;
