import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pageA" element={<PageA />} />
                <Route path="/pageB" element={<PageB />} />
                <Route path="/pageC" element={<PageC />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
