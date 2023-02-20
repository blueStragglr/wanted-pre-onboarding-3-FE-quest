import { Routes, Route } from "react-router-dom";
import Apage from "../pages/Apage";
import Bpage from "../pages/Bpage";
import Cpage from "../pages/Cpage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Apage />} />
      <Route path="/apage" element={<Apage />} />
      <Route path="/bpage" element={<Bpage />} />
      <Route path="/cpage" element={<Cpage />} />
    </Routes>
  );
}

export default AppRouter;
