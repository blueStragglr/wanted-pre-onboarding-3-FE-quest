import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import "./index.css"
import APage from "./pages/a"
import BPage from "./pages/b"
import CPage from "./pages/c"
import LoginPage from "./pages/login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/a",
        element: <APage />,
      },
      {
        path: "/b",
        element: <BPage />,
      },
      {
        path: "/c",
        element: <CPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
