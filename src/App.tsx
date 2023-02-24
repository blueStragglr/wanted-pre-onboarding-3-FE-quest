import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root, { loader as rootLoader, action as rootAction } from "./routes/Root"
import ErrorPage from "./ErrorPage"
import Contact, { loader as contactLoader } from "./routes/Contact"
import EditContact, { action as editAction } from "./routes/EditContect"
import { action as destroyAction } from "./routes/destroy"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "/contacts/:contactId/destroy",
        action: destroyAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
