import { Routes as ReactRouters, Route, BrowserRouter } from "react-router-dom";
import PageA from "./components/PageA";
import PageB from "./components/PageB";
import PageC from "./components/PageC";
import Home from "./page/Home";

function Routes() {
  return (
    <BrowserRouter>
      <ReactRouters>
        <Route path="/" element={<Home />}>
          <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
        </Route>
      </ReactRouters>
    </BrowserRouter>
  );
}

export default Routes;
