import React, {useEffect, useState} from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {urlParams} from "../../Atom/Atoms";

interface sideNavProps {
    sideNavPropsName: string;
    name: string;
}
const CategoryList = ({ post }: { post: sideNavProps }) =>{
    let headTitle = sideNavMap.get(post.name);
    if (headTitle) {
        let sideNameDataMain = headTitle?.main // Object is possibly 'null' 에러가 계속 떠서 옵셔널체이닝 사용하여 처리.
        return <SideNavMain>{sideNameDataMain}</SideNavMain>
    }
    return <></>
}
const SideNav = ({ post }: { post: sideNavProps }) => {
    const [urlCheck, setUrlCheck] = useRecoilState(urlParams);
    console.log('urlCheck',urlCheck)
    const [select,setSelect] = useState<string>();
    const navigate = useNavigate();

    // click -> 클릭한 카테고리 파라미터 넘김
    const handleClick = (name: string,type: string,page:string,params:string) => {
        setSelect(name); // 클릭한 nav is_active
        navigate(`/${params}?${type?type:''}`);
        setUrlCheck(type);
    };
    const { name, sideNavPropsName } = post;
    if (urlCheck.length == 0) {
        console.log('첫번째')
        return (
            <>
                <SideNavWrap className="p-[32px]">
                    <CategoryList post={post}></CategoryList>
                    <SideNavMainSubList>
                        {
                            sideNavMap.get(post.name)&&
                            sideNavMap.get(post.name)?.data &&
                            (sideNavMap.get(post.name)?.data.map((row:any,index:number)=>{
                                console.log('index',index)
                                return (

                                    <SideNavMainSubItem key={index} onClick={()=>{
                                        handleClick(row.name,row.type,sideNavPropsName,name);
                                    }}className= {`${index == 0 ? "sideNav is_active" : ""};`} >
                                        {row.name}
                                    </SideNavMainSubItem>
                                )
                            }))
                        }
                    </SideNavMainSubList>
                </SideNavWrap>
            </>
        )
    } else {
        return (
            <>
                <SideNavWrap className="p-[32px]">
                    <CategoryList post={post}></CategoryList>
                    <SideNavMainSubList>
                        {
                            sideNavMap.get(post.name)&&
                            sideNavMap.get(post.name)?.data &&
                            (sideNavMap.get(post.name)?.data.map((row:any,index:number)=>{
                                console.log('index',index)

                                return (
                                    <SideNavMainSubItem key={index} onClick={()=>{
                                        handleClick(row.name,row.type,sideNavPropsName,name);
                                    }}className={` ${select === row.name ? 'sideNav is_active' : ''};`} >
                                        {row.name}
                                    </SideNavMainSubItem>
                                )
                            }))
                        }
                    </SideNavMainSubList>
                </SideNavWrap>
            </>
        );
    }
};

const sideNavArr = {
    TodoList : {
        id: 1,
        main: 'To-Do-List',
        data: [{name:'오늘 할 일', type:'today'},{name:'지난 할 일',type:'past'}]
        // data: ['오늘 할 일','지난 할 일']
    },
    Attendance: {
        id: 2,
        main: '근무/휴가',
        data: [{name:'근무/휴가', type: ''}]
    }
}

const entry = Object.entries(sideNavArr);
const sideNavMap = new Map(entry);
console.log('sideNavMap',sideNavMap);

const SideNavWrap = tw.div`
  w-[240px] h-[calc(100vh + 50px)]] bg-[#F8F8F8]
`;
const SideNavMain = tw.div`
    text-[20px] font-bold
`;
const SideNavMainSubList = tw.ul`

`;
const SideNavMainSubItem = tw.li`
    text-[16px]
    cursor-pointer
`;


export default SideNav;


// const SideNav: React.FunctionComponent<sideNavProps> = props => {