import { Route, Routes } from "react-router-dom";
import { sectionStyle } from "../style";
import DefaultPage from "./DefaultPage";
import NoAuthPage from "./NoAuthPage";
import PageA from "./PageA";
import PageB from "./PageB";
import PageC from "./PageC";

const CustomSection = ({ auth }: { auth: boolean }) => (
  <div style={sectionStyle}>
    <Routes>
      <Route path="/page_a" element={auth ? <PageA /> : <NoAuthPage />} />
      <Route path="/page_b" element={auth ? <PageB /> : <NoAuthPage />} />
      <Route path="/page_c" element={auth ? <PageC /> : <NoAuthPage />} />
      <Route path="/*" element={<DefaultPage />} />
    </Routes>
  </div>
);

export default CustomSection;
