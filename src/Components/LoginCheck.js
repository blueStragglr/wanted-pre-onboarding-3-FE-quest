//check and logout

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { LoginState } from '../Atom/Atoms';
// import { useCookies } from 'react-cookie'; // 쿠키를 이용한 방법

// LoginCheck 이걸 안만들고 , 보니까
// return { is_logined ?} 이런식으로 하는거같은데 .. 어떻게 하는게 맞는걸까

const LoginCheck = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(['id']);
  // const [userID, setUserId] = useState(null);
  const navigate = useNavigate();
  const insertedToken = localStorage.getItem('access_token');
  const login_check = useRecoilValue(LoginState);

  const authCheck = () => {
    // 페이지에 들어올때 쿠키로 사용자 체크
    /*** recoil-persist 방식 , 이게 맞나 모름 ㅠㅠ ***/
    if (!login_check) {
      navigate('/IntroLogin');
    }
    /***토큰 , localStorage방식 ***/
    const token = insertedToken; // localStorage 체크하기
    // const token = cookies.id; // 쿠키에서 id 를 꺼내기
    // if (token == undefined) {
    //   navigate('/hyeyeon/login');
    // }
  };

  useEffect(() => {
    authCheck(); // 로그인 체크 함수
  });
};
export default LoginCheck;
