import React from "react";
import styled, {css} from "styled-components";

const NavBlock = styled.div`
    display: flex;
    width: 8rem;
    border-right: 1px solid;
    height: 94vh;
    padding-left: 1rem;
    .page {
        padding: 0;
    }
    .page_list {
        list-style: none;
        margin: 0.5rem 0;
    }
    .page_list a {
        text-decoration: none;
    }
`;

function NavBar({pageNow}) {

    const pages = [
        { name: "page A", path:"/pageA", code:'A'},
        { name: "page B", path:"/pageB", code: 'B'},
        { name: "page C", path:"/pageC", code: 'C'}
    ];

    return (
        <NavBlock>
            <div>
                <ul className="page">
                    {pages.map((page, idx) => {
                        return (
                            <li key={idx} className="page_list">
                                <a href={page.path} style={{color: pageNow === page.code ? 'blue' : 'black'}}>
                                    {page.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </NavBlock>
    );
}

export default NavBar;