import { Global } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import globalCss from "./global";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <>
      <Global styles={globalCss}></Global>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/page-a" element={<PageA />}></Route>
            <Route path="/page-b" element={<PageB />}></Route>
            <Route path="/page-c" element={<PageC />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
