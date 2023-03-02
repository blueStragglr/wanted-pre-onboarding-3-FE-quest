import React from 'react';
import './App.scss';
import {Outlet} from "react-router-dom";
import Header from './componets/Header';
import SideBar from "./componets/SideBar";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

export const pageData = [{key: "a", element: <PageA/>},
    {key: "b", element: <PageB/>},
    {key: "c", element: <PageC/>}
];

function App() {
    return (
        <article className="App">
            <Header/>
            <div className={'main'}>
                <SideBar/>
                <Outlet/>
            </div>

        </article>
    );
}

export default App;
