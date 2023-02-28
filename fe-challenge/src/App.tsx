import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./Layout/MainLayout/MainLayout";
import PageA from "./Pages/PageA";
import PageB from "./Pages/PageB";
import PageC from "./Pages/PageC";
import reset from "./Style/style";
import { Global } from "@emotion/react";

function App() {
  return (
    <>
      <Global styles={reset} />
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path={"/"} element={<PageA />} />
            <Route path={"/pagea"} element={<PageA />} />
            <Route path={"/pageb"} element={<PageB />} />
            <Route path={"/pagec"} element={<PageC />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
