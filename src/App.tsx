import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import './Styles/tailwind.css';
import Layout from './Layout';
import Intro from './Pages/Intro';
import Attendance from './Pages/Attendance';
import TodoList from "./Pages/TodoList/index";
import IntroLogin from "./Pages/Intro/Login";


const App = () => {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Intro/>}/>
                        <Route path="/Attendance" element={<Attendance/>}/>
                        <Route path="/TodoList" element={<TodoList/>}/>
                    </Route>
                    <Route path="/IntroLogin" element={<IntroLogin/>}/>
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    );
};

export default App;
