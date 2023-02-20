import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="h-full flex flex-col" style={{ minWidth: "600px" }}>
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 flex justify-center items-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
