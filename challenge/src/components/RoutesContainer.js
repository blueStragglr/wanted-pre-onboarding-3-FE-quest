import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import PageA from "../pages/PageA";
import PageB from "../pages/PageB";
import PageC from "../pages/PageC";
import Login from "../pages/Login";

function RoutesContainer () {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/pageA" element={<PageA/>}/>
                <Route path="/pageB" element={<PageB/>}/>
                <Route path="/pageC" element={<PageC/>}/>
            </Routes>
        </div>
    )
}
export default RoutesContainer;