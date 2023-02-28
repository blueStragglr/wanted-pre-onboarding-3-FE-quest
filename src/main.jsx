import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import GlobalStyles from "./global/globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>,
);
