import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <Link to='/'>원티드 프리온보딩</Link>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    position: sticky;
    border-bottom: 1px solid black;
`;
