import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import A from "../pages/A";
import B from "../pages/B";
import C from "../pages/C";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="pageA" element={<A />}></Route>
                    <Route path="pageB" element={<B />}></Route>
                    <Route path="pageC" element={<C />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="signup" element={<Register />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
