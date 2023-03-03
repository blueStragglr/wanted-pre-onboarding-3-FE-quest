import { Outlet } from "react-router-dom";

export const Page1 = () => {
    return (
        <div>
            This Is Page1
            <Outlet />
        </div>
    );
};
