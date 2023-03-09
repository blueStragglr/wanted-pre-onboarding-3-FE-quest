import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PageA } from "./pages/PageA";
import { PageC } from "./pages/PageC";
import { PageB } from "./pages/PageB";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page-a" element={<PageA />} />
      <Route path="/page-b" element={<PageB />} />
      <Route path="/page-c" element={<PageC />} />
    </Routes>
  );
}

export default App;
