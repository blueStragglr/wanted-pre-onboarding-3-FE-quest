import styled from 'styled-components';

export interface StyledHeadingMarginPropsType {
    marginTop?: string,
    marginLeft?: string,
    marginBottom?: string,
    marginRight?: string
}

export type HeadingTextPropsType = {
    content : string,
    margin : StyledHeadingMarginPropsType,
}


const StyledHeading = styled.span<StyledHeadingMarginPropsType>`
    font-weight:800;
    font-size:20px;

    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-bottom: ${props => props.marginBottom};
    margin-right: ${props => props.marginRight};
`;

export function HeadingText({content, margin}:HeadingTextPropsType) {
    return(
        <StyledHeading {...margin}>{content}</StyledHeading>
    )
}