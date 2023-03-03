import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";

import MainLayout from "@/Components/Layouts/MainLayout";
import { useAuthContext } from "@/Context/AuthContextProvider";
import { Login, PageA, PageB, PageC } from "@/Pages";
import Logout from "@/Pages/Logout";

const Routers = () => {
  const {
    state: { isLogin }
  } = useAuthContext();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          index
          element={<PageA />}
        />
        <Route
          path="page-a"
          element={<PageA />}
        />
        <Route
          path="page-b"
          element={<PageB />}
        />
        <Route element={<PrivateRoutes isLogin={isLogin} />}>
          <Route
            path="page-c"
            element={<PageC />}
          />
        </Route>
      </Route>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route element={<PrivateRoutes isLogin={isLogin} />}>
        <Route
          path="/logout"
          element={<Logout />}
        />
      </Route>
    </Routes>
  );
};

export default Routers;
