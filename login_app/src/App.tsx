import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { APage } from "./APage";
import { BPage } from "./BPage";
import { CPage } from "./CPage";

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App__content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/a' element={<APage/>}></Route>
          <Route path='/b' element={<BPage/>}></Route>
          <Route path='/c' element={<CPage/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;