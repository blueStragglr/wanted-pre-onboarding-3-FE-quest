import { ReactNode } from "react";
import styled from 'styled-components';

import { ASide } from "../organisms/ASide";
import { Header } from "../molecules/Header";
import { Main } from "../molecules/Main";

export type PageTemplatePropsType = {
    pageType: string,
    content:ReactNode,
}

const StyledMain = styled.main`
    display:flex;
    flex-direction:row;
`;

export function PageTemplate({pageType ,content}:PageTemplatePropsType) {
    return (
        <div>
            <Header />
            <StyledMain>
                <ASide pageType={pageType} />
                <Main content={content}/>
            </StyledMain>
        </div>
    )
}