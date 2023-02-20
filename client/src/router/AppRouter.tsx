import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apage from "../pages/Apage";
import Bpage from "../pages/Bpage";
import Cpage from "../pages/Cpage";
import Login from "../pages/Login";
import Layout from "../components/layout/Layout";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Apage />} />
          <Route path="/apage" element={<Apage />} />
          <Route path="/bpage" element={<Bpage />} />
          <Route path="/cpage" element={<Cpage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
