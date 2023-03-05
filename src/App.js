import {Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PageA from "./pages/PageA";
import PageB from "./pages/pageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pageA" element={<PageA />} />
      <Route path="/pageB" element={<PageB />} />
      <Route path="/pageC" element={<PageC />} />
    </Routes>
  );
};

export default App;
