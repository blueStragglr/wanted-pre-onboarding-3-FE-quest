import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";
import PagesContext from "../contexts/PagesContext";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  const { pageComponents } = useContext(PagesContext);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<MainPage />}>
              {pageComponents.map((page) => {
                if (page.name === "Home") {
                  let PageComponent = page;
                  return <Route index key={page.name} element={<PageComponent />} />;
                } else {
                  let PageComponent = page;
                  return <Route key={page.name} path={page.name} element={<PageComponent />} />;
                }
              })}
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
