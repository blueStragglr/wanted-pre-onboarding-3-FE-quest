import { Outlet } from 'react-router-dom';

import { loginStyle } from './LoginLayout.styles';

export function LoginLayout() {
    return (
        <>
        <div className={loginStyle}>
            <Outlet />
        </div>
        </>
    );
}