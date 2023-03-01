import React from "react";
import { Outlet } from "react-router";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";

type Props = {};

const App = (props: Props) => (
  <div className="app">
    <Header />
    <SideBar />
    <Outlet />
  </div>
);

export default App;
