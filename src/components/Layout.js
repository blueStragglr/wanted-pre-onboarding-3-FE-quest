import React from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav>Nav</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
