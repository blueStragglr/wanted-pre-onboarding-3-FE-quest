import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Main from '../components/Main';
import PageA from '../components/PageA';
import PageB from '../components/PageB';
import PageC from '../components/PageC';

const Contents = () => {

    const ContentsWrap = styled.div`
        padding: 20px;        
        box-sizing: border-box;
    `;

    return (
        <ContentsWrap>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/pageA" element={<PageA /> } />
                <Route path="/pageB" element={<PageB />} />
                <Route path="/pageC" element={<PageC />} />
      </Routes>
      </ContentsWrap>
    );
};

export default Contents;