import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoListHead from "./TodoListHead";
import SideNav from "../Layout/SideNav";
import { useParams } from 'react-router-dom';
import TodoListBody from "./TodoListBody";
import {useRecoilState, useRecoilValue} from "recoil";
import {urlParams} from "../../Atom/Atoms";

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFF;
  }
`;
const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;


interface sideNavProps {
    sideNavPropsName: string;
    name: string
}

const TodoList = () => {
    let { username } = useParams();
    console.log('username',username)
    const params = useRecoilValue(urlParams);
    console.log('params',params);
    const [category, setCategory] = React.useState<sideNavProps>({sideNavPropsName : '오늘 할 일', name : 'TodoList'});
    return (
        <>
            {
                params.length == 0 &&
                <>
                    <GlobalStyle/>
                    {/*{tempFunc().forEach(item => <SideNav post={item}></SideNav>)}*/}
                    <SideNav post={category}></SideNav>
                    <TodoTemplateBlock>
                        <div>룰루</div>
                        <TodoListHead></TodoListHead>
                        <TodoListBody></TodoListBody>
                    </TodoTemplateBlock>
                </>
            }
            {
                params == 'today' &&
                <>
                    <GlobalStyle/>
                    {/*{tempFunc().forEach(item => <SideNav post={item}></SideNav>)}*/}
                    <SideNav post={category}></SideNav>
                    <TodoTemplateBlock>
                        <div>룰루</div>
                        <TodoListHead></TodoListHead>
                        <TodoListBody></TodoListBody>
                    </TodoTemplateBlock>
                </>
            }
            {
                params == 'past' &&
                <>
                    <GlobalStyle/>
                    <SideNav post={category}></SideNav>
                    <TodoTemplateBlock>
                        <div>랄라</div>
                        <TodoListHead></TodoListHead>
                        <TodoListBody></TodoListBody>
                    </TodoTemplateBlock>
                </>
            }
        </>
    );
};
export default TodoList;











// const tempFunc = () =>{
//     let a: sideNavProps =
//         {
//             sideNavPropsName : '오늘 할 일',
//             name : '오늘 할 일'
//         };
//
//     let b :sideNavProps[] = [];
//     for (let i = 0; i < 5; i++) {
//         b.push(a)
//     }
//     return b;
// }

// console.log('tempFunc',tempFunc());
// console.log('categories',categories);
// console.log('sideCategory',sideCategory);
