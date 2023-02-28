import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { categories } from './common/Category';
import Header from './common/Header';
import Nav from './common/Nav';
import Contents from './common/Contents';
import styled from "styled-components";

  const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: stretch;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  `;

function App() {
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
      goNav(`${path}?permission=${permission}`);
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
        <Contents categories={categories} />
      </Wrapper>
    </div>
  );
}

export default App;
