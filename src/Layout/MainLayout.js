import React from "react";
import {
  Outlet,
  Link,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { logout, checkLoggedIn } from "../auth";
import { MainNav } from "./MainNav";

export function MainLayout() {
  const isLoggedIn = checkLoggedIn();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  if (!isLoggedIn && !isHomePage) {
    alert("please login first");
    return <Navigate to="/login" />;
  }

  return (
    <div className="main-layout">
      <header className="main-layout__header flex-center">
        Wanted Pre-onboarding course
        {isLoggedIn ? <Logout /> : <Login />}
      </header>
      <div className="main-layout__content">
        <MainNav />
        <main className="main-layout__main flex-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function Login() {
  return (
    <Link className="login-btn" to="/login">
      Login
    </Link>
  );
}
function Logout() {
  const navigate = useNavigate();
  const onClick = () => {
    logout(navigate);
  };
  return (
    <button className="login-btn" onClick={onClick}>
      Logout
    </button>
  );
}
