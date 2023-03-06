import React from 'react';
import styled from "styled-components";

const NavWrapper = styled.div`
    border-right: 1px solid #e7e7e7;
    width: 130px;
    padding: 1.25rem;
    box-sizing: border-box;
    @media screen and (max-width: 500px) {
        width: 100%;
        border:0;
        border-bottom: 1px solid #e7e7e7;
    }
    `;

    const MenuLink = styled.div`
    font-size: 0.95rem;
    color: #292828;
    cursor: pointer;
    opacity: 0.7;

    span {
        line-height: 20px;
        vertical-align: top;
    }

    &.active {
        color: #2c09ab;
        font-weight: 700;
        position: relative;
        opacity: 1;
    }

    &:hover{
        opacity: 1;
        text-decoration: underline;
        transition: all 0.7s ease;
        font-weight: 700;
        color: #a01ff0;
    }

    & + & {
        margin-top: 15px;
    }
`;

const Nav = ({categories,selectMenu,activeLink}) => {

    return (
        <NavWrapper>
            {categories.map(ca => (
                <MenuLink
                key={ca.pageName}
                onClick={()=>{selectMenu(ca)}}
                className={activeLink===`${ca.pageName}`?'active':''}
                ><span className="material-symbols-outlined">
                description
                </span>
                <span>{ca.pageName}</span></MenuLink>
            ))}
        </NavWrapper>
    );
};

export default Nav;