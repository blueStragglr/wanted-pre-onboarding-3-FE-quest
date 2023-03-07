import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Layout from 'src/components/common/Layout'
import LoginPage from 'src/pages/LoginPage'

const PageA = lazy(() => import('../pages/PageA'))
const PageB = lazy(() => import('../pages/PageB'))
const PageC = lazy(() => import('../pages/PageC'))

const pageRoute = [
  {
    path: 'pages',
    element: <Navigate to="pages" />,
  },
  {
    path: 'pages/a',
    element: <PageA />,
  },
  {
    path: 'pages/b',
    element: <PageB />,
  },
  {
    path: 'pages/c',
    element: <PageC />,
  },
]

const RenderRouter = () =>
  useRoutes([
    // {
    //   path: 'login',
    //   element: <LoginPage />,
    // },
    {
      path: '/',
      element: <Layout />,
      children: [...pageRoute],
    },
  ])

export default RenderRouter
