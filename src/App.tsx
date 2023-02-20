import { Outlet } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./routes/PageA";

export default function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
