import { ReactNode } from "react";
import styled from 'styled-components';

import { ASide } from "../molecules/ASide";
import { Header } from "../molecules/Header";
import { Main } from "../molecules/Main";

export type PageTemplatePropsType = {
    pageType: string,
    content:ReactNode,
}

const StyledTemplateDiv = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
  width:100vw;
  height:100vh;

  position:relative;
`;

const StyledMain = styled.main`
    width:100vw;
    max-height:93vh;
    display:flex;
    flex-direction:row;
`;

export function PageTemplate({pageType ,content}:PageTemplatePropsType) {
    return (
        <StyledTemplateDiv>
            <Header />
            <StyledMain>
                <ASide pageType={pageType} />
                <Main content={content}/>
            </StyledMain>
        </StyledTemplateDiv>
    )
}