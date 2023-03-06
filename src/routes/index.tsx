import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

const PageA = lazy(() => import('../pages/PageA'))
const PageB = lazy(() => import('../pages/PageB'))
const PageC = lazy(() => import('../pages/PageC'))

const pageARoute = [
  {
    path: 'pages/PageA',
    element: <></>,
  },
]
const pageBRoute = [
  {
    path: 'pages/PageB',
    element: <></>,
  },
]
const pageCRoute = [
  {
    path: 'pages/PageC',
    element: <></>,
  },
]

const RenderRouter = () =>
  useRoutes([
    {
      path: '/',
      children: [...pageARoute],
    },
  ])

export default RenderRouter
