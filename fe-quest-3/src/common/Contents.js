import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Main from '../components/Main';
import PageA from '../components/PageA';
import PageB from '../components/PageB';
import PageC from '../components/PageC';
import NoMatch from '../components/NoMatch';

const ContentsWrap = styled.div`
    padding: 20px;        
    box-sizing: border-box;
`;

const targetComponents = {
    PageA:<PageA/>,
    PageB:<PageB />,
    PageC:<PageC />,
}

const Contents = ({categories}) => {

    return (
        <ContentsWrap>
            <Routes>
                <Route path="/" element={<Main />} />
                {categories.map((cate,idx)=>{
                    const element = targetComponents[cate.pageName];
                        return (
                            <Route key={`${cate.pageName}_${idx}`} path={cate.path} element={element} />
                        );
                    })
                }
                <Route path="*" element={<NoMatch />} />
      </Routes>
      </ContentsWrap>
    );
};

export default Contents;