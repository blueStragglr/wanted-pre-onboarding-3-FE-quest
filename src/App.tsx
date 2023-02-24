import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
