import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/Header/Header";
import Main from "../pages/Main/Main";
import Challenge from "../pages/Challenge/Challenge";
import Mission from "../pages/Mission/Mission";
import Curriculum from "../pages/Curriculum/Curriculum";
import Login from "../pages/Login/Login";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
