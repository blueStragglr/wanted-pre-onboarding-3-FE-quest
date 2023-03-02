import React from 'react';

const Header = () => {

    const onClickLogout = () => {
        window.location.href = "/Login"
    }

    return (
        <header className="wanted-march-header">
            <div className="inner">
                <h1>Wanted Pre-onboarding course</h1>
                <button type="button" onClick={onClickLogout}>로그아웃</button>
            </div>
        </header>
    );
};

export default Header;