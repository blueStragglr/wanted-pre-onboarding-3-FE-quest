import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Page from "./pages/page";
import React from "react";
import ErrorBoundary from "./pages/errorBoundary";
import Root from "./pages/Root";

function Layout() {
  const { pageId } = useParams();

  const NavEl = ({ href, page }) => {
    return (
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "text-blue-500" : undefined;
            }}
            to={href}
          >
            {page}
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <div className="flex flex-col w-full h-full">
      <header className="w-full p-6 border-b border-black font-semibold italic text-xl">
        Wanted Pre-onboarding course
      </header>
      <div className="flex flex-1">
        <nav className="flex flex-col w-48 p-6 border-r border-black gap-y-6 text-xl ">
          <NavEl page="Main" href="/" />
          <NavEl page="Page A" href="a" />
          <NavEl page="Page B" href="b" />
          <NavEl page="Page C" href="c" />
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Root />}></Route>
          <Route path=":pageId" element={<Page />}></Route>
          <Route path="*" element={<ErrorBoundary />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
