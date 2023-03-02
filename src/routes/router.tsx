import Layout from '@components/layout'
import A from '@routes/a'
import B from '@routes/b'
import C from '@routes/c'
import ErrorPage from '@routes/error-page'
import PrivateRoute from '@routes/private-route'
import SignIn from '@routes/sign-in'
import SignUp from '@routes/sign-up'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <A /> },
                    { path: 'a', element: <A /> },
                ],
            },
            {
                element: <PrivateRoute />,
                errorElement: <ErrorPage />,
                children: [
                    { path: 'b', element: <B /> },
                    { path: 'c', element: <C /> },
                ],
            },
        ],
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}
