import React from "react";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <div className="flex items-center justify-center sticky h-screen">
      <Router />
    </div>
  );
};
