import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';
import { mainContentStyle } from './MainLayout.styles';

export function MainLayout() {
    return (
        <>
            <Header />
            <SideNav />
            <div className={mainContentStyle}>
                <Outlet />
            </div>
        </>
    );
}