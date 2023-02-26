import { BrowserRouter, Route, Routes } from "react-router-dom";
import { sectionStyle } from "../style";
import PageA from "./PageA";
import PageB from "./PageB";
import PageC from "./PageC";

const CustomSection = () => (
  <div style={sectionStyle}>
    <Routes>
      <Route path="/page_a" element={<PageA />} />
      <Route path="/page_b" element={<PageB />} />
      <Route path="/page_c" element={<PageC />} />
    </Routes>
  </div>
);

export default CustomSection;
