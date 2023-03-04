import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import SideBar from "./components/SideBar";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/page1" element={<PageA />} />
          <Route path="/page2" element={<PageB />} />
          <Route path="/page3" element={<PageC />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
