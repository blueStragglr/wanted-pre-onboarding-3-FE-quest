import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import "./style/variables.css";
import "./style/global.css";
import PageA from "./pages/pageA";
import PageB from "./pages/pageB";
import PageC from "./pages/pageC";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
      </Routes>
    </Layout>
  );
}

export default App;
