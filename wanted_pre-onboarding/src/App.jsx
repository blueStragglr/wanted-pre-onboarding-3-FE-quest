import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SignInPage from "@/pages/SignInPage";
import MainPage from "@/pages/MainPage";
import { useState } from "react";

const isAuth = () => {
  const isSignIn = window.localStorage.getItem("auth_token") !== null;
  return isSignIn;
};

const RequireAuth = ({ children }) => {
  const auth = isAuth();
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <MainPage />
          </RequireAuth>
        }
      />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
};

export default App;
