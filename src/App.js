import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Aside from "./component/Aside";
import Page01 from "./page/Page01";
import Page02 from "./page/Page02";
import Page03 from "./page/Page03";
import Main from "./page/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} />
        <Route path="/page03" element={<Page03 />} />
      </Routes>
    </div>
  );
}

export default App;
