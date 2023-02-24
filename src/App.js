import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import PageA from "./Pages/PageA/PageA";
import PageB from "./Pages/PageB/PageB";
import PageC from "./Pages/PageC/PageC";
import Login from "./Pages/Login/Login";
import Layout from "./Pages/Layout";
import LayoutHS from "./Pages/LayoutHS";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutHS />}>
            <Route path="/" element={<Main />} />
            <Route path="/a" element={<PageA />} />
            <Route path="/b" element={<PageB />} />
            <Route path="/c" element={<PageC />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
