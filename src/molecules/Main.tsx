import {ReactNode} from 'react';
import styled from 'styled-components';

export type MainPropsType = {
    content: ReactNode,
}

const StyledMain = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
`

export function Main({content}: MainPropsType ) {
    return(
        <StyledMain>
            {content}
        </StyledMain>
    )
}