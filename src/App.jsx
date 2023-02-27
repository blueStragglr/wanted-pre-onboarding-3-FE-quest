import { useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Content from "./pages/Content";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateContents from "./pages/PrivateContents";
import PublicContents from "./pages/PublicContents";
import Sidebar from "./pages/Sidebar";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const getPathname = window.location.pathname;

  const ProtectedRoute = ({ children }) => {
    if (!currentUser.id) {
      navigate("/login");
      return;
    }
    return children;
  };
  return (
    <>
      {getPathname === "/login" ? (
        <Login />
      ) : (
        <>
          <Header />
          <div style={{ display: "flex" }}>
            <Sidebar />
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/public" element={<PublicContents />} />
                <Route
                  path="/private"
                  element={
                    <ProtectedRoute>
                      <PrivateContents />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Content>
          </div>
        </>
      )}
    </>
  );
};

export default App;
