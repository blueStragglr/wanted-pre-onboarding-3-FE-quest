import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import tw from 'tailwind-styled-components';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

const Intro: React.FC = () => {
    const navigate = useNavigate();
    const todoListRegistration = () => {
        navigate('/TodoList');
    };
  return (
    <IntroWrap>
      <IntroHead className="mb-[20px]">
        <div className="text-[18px] font-bold p-[20px] indent-[20px]">‍😃 혜연님, 오늘도 힘찬 하루 보내세요!</div>
      </IntroHead>
      <IntroBody className="">
        <IntroBodyBox>
          <Todolist>
              <TodolistTitle>오늘할일</TodolistTitle>
              <TodoListBody>
                  <TodoListBodyInner>
                      <TodoListBodyText>오늘 할일을 입력해보세요</TodoListBodyText>
                      <TodoListButton onClick={todoListRegistration}>오늘 할일 등록하러가기</TodoListButton>
                  </TodoListBodyInner>
              </TodoListBody>
          </Todolist>

        </IntroBodyBox>
      </IntroBody>
    </IntroWrap>
  );
};

const IntroWrap = tw.div`
 w-full h-[100vh] bg-[#F9F9F9]
`;
const IntroHead = tw.div`
 w-full h-[60px] bg-white shadow flex items-center 
`;

const IntroBody = tw.div`
 flex items-center justify-center p-[20px]
`;

const IntroBodyBox = tw.div`
 bg-white w-[500px] h-[300px] flex
 rounded-t-lg  rounded-r-lg  rounded-b-lg  rounded-l-lg shadow
`;

const Todolist = tw.div`
    w-full flex flex-col
`
const TodoListBody = tw.div`
flex flex-col items-center h-full justify-center p-[20px] 
`
const TodoListBodyInner = tw.div`
    flex bg-[#F6F6F6] justify-center items-center w-full h-full flex flex-col
`

const TodolistTitle = tw.div`
    text-[18px] text-[#565F7C] font-bold h-[50px] leading-[25px] p-[10px]
`
const TodoListBodyText = tw.div`
   text-[14px] mb-5
`
const TodoListButton = tw.div`
    w-[120px] h-[24px] leading-[24px] rounded-[3px] cursor-pointer bg-blue-400 text-center text-white
`

export default Intro;
