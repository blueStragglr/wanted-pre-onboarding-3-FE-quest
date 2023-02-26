import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PageA from "./page/PageA";
import PageB from "./page/PageB";
import PageC from "./page/PageC";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<PageA />} />
          <Route path="pageb" element={<PageB />} />
          <Route path="pagec" element={<PageC />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
