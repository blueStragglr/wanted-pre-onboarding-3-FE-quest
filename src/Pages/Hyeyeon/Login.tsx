import React, { useState } from 'react';
import { RecoilRootProps, useRecoilValue, useRecoilState, atom } from 'recoil';
import { IUser, User, LoginState } from '../../Atom/Atoms';
import styled from 'styled-components';
import Button from '../../Components/Button';
import { useCookies } from 'react-cookie'; // useCookies import
import { useNavigate } from 'react-router';

/***
 * 로그인을 유지하는 방법은 여러가지인것 같다.
 * 어떤것이 좋은 방법일까? 리코일을 사용해보기로해서 recoil-persist로 유지시켜볼까한다.
 * 1. 토큰,로컬스토리지,리코일퍼시스트(recoil-persist)
 * recoil-persist도 결국은 localStorage에 보관된다.
 * ***/

const HyeyeonLogin = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['id']); //쿠키
  const [user, setUser] = useRecoilState<IUser>(User);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const navigate = useNavigate();

  // 로그인 입력한 정보담기
  const [inputData, setInputData] = useState<any>({
    userId: '',
    userPw: '',
  });

  removeCookie('id');

  const { userId, userPw } = inputData;
  const onChange = (event: any) => {
    const { value, name } = event.target;
    const nextInputs = {
      ...inputData,
      [name]: value,
    };
    setInputData(nextInputs);
  };

  const insertedToken = localStorage.getItem('access_token');
  const onClick = () => {
    if (api(user)) {
      console.log('페이지 이동');
      setIsLoggedIn(true); // recoil-persist => localStorage에 저장
      navigate('/');
      /*** 토큰,localStorage 저장해보기 ***/
      // const token = cookies.id;
      // setCookie('id', 'loginOk'); // 쿠키에 토큰 저장
      // localStorage.setItem('access_token', 'loginOk'); // localStorage에 토큰저장 실제는 loginOk 아니고 응답값을 저장해야함
    } else {
      console.log('로그인실패');
      alert('로그인 실패: id: admin & password: pw 를 입력해야 넘어감');
    }
  };

  const api = (reqUser: IUser) => {
    //api
    console.log('inputData', inputData);
    if (reqUser.id === inputData.userId && reqUser.pwd === inputData.userPw) {
      console.log('맞다');
      return true;
    } else {
      console.log('아니다');
      return false;
    }
  };

  return (
    <>
      <Login>
        <LoginBox>
          <div className="font-bold text-[18px] mb-[20px]">로그인</div>
          <StyledInput
            className="input mb-[10px]"
            name="userId"
            value={userId}
            placeholder="아이디를 입력하세요"
            onChange={onChange}
          />
          <StyledInput
            className="input mb-[10px]"
            name="userPw"
            value={userPw}
            placeholder="비밀번호를 입력하세요"
            onChange={onChange}
          />
          <Button className="h-[40px] rounded-[5px] bg-[#2083F8] leading-[15px]" onClick={onClick}>
            로그인
          </Button>
        </LoginBox>
      </Login>
    </>
  );
};

const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  min-height: 100vh;
  background-color: #1367ca;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 456px;
  background-color: #fff;
  border-radius: 8px;
  padding: 50px;
`;

const StyledInput = styled.input`
  border: 1px solid #dcdcdd;
  background-color: #fff;
  padding: 10px 15px;
`;
export default HyeyeonLogin;
