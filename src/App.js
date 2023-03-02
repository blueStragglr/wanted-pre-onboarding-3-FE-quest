import logo from "./logo.svg";
import "./App.css";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageB from "./pages/PageB";
import PageA from "./pages/PageA";
import PageC from "./pages/PageC";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>is error 😂</p>,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/page_a", element: <PageA /> },
      { path: "/page_b", element: <PageB /> },
      { path: "/page_c", element: <PageC /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
