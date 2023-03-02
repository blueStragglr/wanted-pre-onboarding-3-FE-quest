import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./pages/Main";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1" element={<PageA />} />
        <Route path="/page2" element={<PageB />} />
        <Route path="/page3" element={<PageC />} />
      </Routes>
    </>
  );
}

export default App;
