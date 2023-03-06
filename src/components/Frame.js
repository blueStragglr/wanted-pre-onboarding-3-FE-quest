import Header from "./Header";
import Sidebar from "./SideBar";
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";

export default function Frame (){

    //헤더, 네비, 콘텐츠 영역
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<Page01 />}/>
                    <Route path="/page01" element={<Page01 />}/>
                    <Route path="/page02" element={<Page02 />}/>
                    <Route path="/page03" element={<Page03 />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

