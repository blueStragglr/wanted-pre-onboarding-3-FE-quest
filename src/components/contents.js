import { Route, Routes } from "react-router";

import Home from "../pages/home";
import PageA from "../pages/pageA";
import PageB from "../pages/pageB";
import PageC from "../pages/pageC";

const Contents = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pageA" element={<PageA />} />
      <Route path="/pageB" element={<PageB />} />
      <Route path="/pageC" element={<PageC />} />
    </Routes>
  );
};

export default Contents;
