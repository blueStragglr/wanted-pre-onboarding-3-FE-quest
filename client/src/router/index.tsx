import { useRoutes } from 'react-router-dom'

import LayoutFullPage from '@/layouts/LayoutFullPage'
import LayoutWithHeader from '@/layouts/LayoutWithHeader'
import { privateRoutesWithHeader } from '@/router/PrivateRoutes'
import { publicRoutesWithFullPage, publicRoutesWithHeader } from '@/router/PublicRoutes'

const Router = () => {
  const element = [
    {
      element: <LayoutWithHeader />,
      children: [...publicRoutesWithHeader, ...privateRoutesWithHeader],
    },
    {
      element: <LayoutFullPage />,
      children: [...publicRoutesWithFullPage],
    },
  ]
  return useRoutes(element)
}

export default Router
