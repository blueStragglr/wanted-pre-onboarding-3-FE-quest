import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home"
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Header/>
        <div className="container">
          <Sidebar/>
          <div className="others">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/page1" element={<Page1/>}/>
              <Route path="/page2" element={<Page2/>}/>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
      </div>
  )
}

export default App
