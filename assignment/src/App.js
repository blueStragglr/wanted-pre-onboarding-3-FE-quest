import Layout from "components/Layout";
import PageA from "pages/PageA";
import PageB from "pages/PageB";
import PageC from "pages/PageC";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
