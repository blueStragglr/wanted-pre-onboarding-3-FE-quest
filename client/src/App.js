import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pags/Home";
import PageA from "./pags/PageA";
import PageB from "./pags/PageB";
import PageC from "./pags/PageC";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
        <Route path="/c" element={<PageC />} />
      </Route>
    </Routes>
  );
}

export default App;
