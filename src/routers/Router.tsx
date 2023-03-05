import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PageA from "../pages/PageA";
import PageB from "../pages/PageB";
import PageC from "../pages/PageC";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PageA />} />
      <Route path="/page_b" element={<PageB />} />
      <Route path="/page_c" element={<PageC />} />
    </Routes>
  );
}

export default Router;
