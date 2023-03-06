import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Nav from '../common/Nav';
import Contents from '../common/Contents';
import { categories } from '../common/Category';
import styled from "styled-components";

export async function loader({params}){
  return null;
}

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: stretch;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
`;


const Container = () => {

    const [activeLink, setActiveLink] = useState(null);
    const { pathname } = useLocation();
    const goNav = useNavigate();
  
    useEffect(()=>{
      const current = categories.find(cate => cate.path === pathname);
      setActiveLink(`${current?current.pageName : null}`);    
    },[pathname]);
  
    const selectMenu = ({pageName,path,permission}) => {
      if(!pageName) {
        goNav('/');
        setActiveLink(null);
        return;
      }
        setActiveLink(pageName);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        goNav(`${path}?permission=${permission}`,{state:{message:'this is state'}});
    }
  


    return (
    <div className="app_container">
        <Header selectMenu={selectMenu} />
        <Wrapper>
        <Nav 
        categories={categories}
        activeLink={activeLink}
        selectMenu={selectMenu}
        />
        <Contents>
          <Outlet/>
        </Contents>        
        </Wrapper>
    </div>
        
    );
};

export default Container;