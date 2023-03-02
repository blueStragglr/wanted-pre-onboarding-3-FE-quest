import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const accessToken = window.sessionStorage.getItem('accessToken')

    if (!accessToken) return <Navigate to="/sign-in" replace />

    return <Outlet />
}
