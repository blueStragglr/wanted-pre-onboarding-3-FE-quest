import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';

const cates = [
    {
        name: 'A',
        permission: false,
    },{
        name: 'B',
        permission: false,
    },{
        name: 'C',
        permission: true,
    }
]

const Nav = () => {
    const [activeLink, setActiveLink] = useState(null);
    const { pathname } = useLocation();
    const goNav = useNavigate();

    useEffect(()=>{
        setActiveLink(pathname);
    },[pathname]);

    const selectMenu = (pageName,permission) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        goNav(`/page${pageName}?permission=${permission}`);
        setActiveLink(`/page${pageName}`);
    }

    const NavWrapper = styled.div`
        border-right: 1px solid #e7e7e7;
        width: 100px;
        padding: 20px;
        box-sizing: border-box;
    `;

    const MenuLink = styled.div`
        font-size: 14px;
        color: #292828;
        cursor: pointer;
        opacity: 0.7;

        &.active {
            color: #2c09ab;
            font-weight: 700;
            position: relative;
            opacity: 1;
        }

        &:hover{
            opacity: 1;
            text-decoration: underline;
            transition: all ease 0.7s;
            font-weight: 700;
        }
    `;

    return (
        <NavWrapper>
            {cates.map(ca => (
                <MenuLink
                key={ca.name}
                onClick={()=>{selectMenu(ca.name,ca.permission)}}
                className={activeLink===`/page${ca.name}`?'active':''}
                >page {ca.name}</MenuLink>
            ))}
        </NavWrapper>
    );
};

export default Nav;