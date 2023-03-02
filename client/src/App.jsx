import "./App.css";

import { UserContext } from "./context/userContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { useState } from "react";
import Todo from "./pages/Todo";

function App() {
  const [user, setUser] = useState({
    isLogin: false,
    info: { name: "" },
  });
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
