import React from 'react';

const SideBar = ({isActive}) => {

    const navGroup = [
        {
            name : "Main",
            url : "/Main",
        },
        {
            name : "Intro",
            url : "/Intro",
        },
        {
            name : "History",
            url : "/History",
        },
    ]

    return (
        <nav className="wanted-march-navigation">
            <ul>

                {
                    navGroup.map((item, i) => {
                    return (
                        <li key={i}>
                            <a href={item.url} className={isActive === item.name.toLowerCase() ? 'is-active' : ''}>{item.name}</a>
                        </li>
                    )
                    })
                }
            </ul>
        </nav>
    );
};

export default SideBar;