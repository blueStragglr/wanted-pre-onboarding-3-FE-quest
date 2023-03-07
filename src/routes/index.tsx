import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import LoginPage from 'src/pages/LoginPage'

const PageA = lazy(() => import('../pages/PageA'))
const PageB = lazy(() => import('../pages/PageB'))
const PageC = lazy(() => import('../pages/PageC'))

const pageRoute = [
  {
    path: 'pages',
    element: (
      <>
        <PageA />
      </>
    ),
  },
  {
    path: 'pages/b',
    element: (
      <>
        <PageB />
      </>
    ),
  },
  {
    path: 'pages/c',
    element: (
      <>
        <PageC />
      </>
    ),
  },
]

const RenderRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/',
      children: [...pageRoute],
    },
  ])

export default RenderRouter
