import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from "./components/Layout/LayoutContainer";
import ProtectedRoute from "./components/ProtectedRoute";
import APage from "./pages/APage";
import BPage from "./pages/BPage";
import CPage from "./pages/CPage";
import LoginPage from "./pages/LoginPage";
import { PATH_NAME } from "./constants/path";
import { AuthContextProvider } from "./contexts/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PATH_NAME.LOGIN} element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<LayoutContainer />}>
              <Route path={PATH_NAME.PAGE_A} element={<APage />} />
              <Route path={PATH_NAME.PAGE_B} element={<BPage />} />
              <Route path={PATH_NAME.PAGE_C} element={<CPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
