import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App, {pageData} from './App';
import PageA from "./pages/PageA";
import NotFound from "./pages/NotFound";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let pageChildren = pageData.map((page, index) => {
    return {path: `page-${page.key}`, element: page.element}
})

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children:
            [{index: true, element: <PageA/>}, ...pageChildren]
    },
    {
        path:"/login",
        element: <Login/>,
        errorElement: <NotFound/>,
        children:
            [{index: true, element: <Login/>}]
    }
])
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
