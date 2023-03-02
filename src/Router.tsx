import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Routes/Home";
import PageA from "./Routes/PageA";
import PageB from "./Routes/PageB";
import PageC from "./Routes/PageC";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pagea" element={<PageA />}></Route>
        <Route path="/pageb" element={<PageB />}></Route>
        <Route path="/pagec" element={<PageC />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
