import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Navbar from "./Navbar";

function Layout() {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Aside />
        <section className="grid flex-1 place-items-center">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
export default Layout;
