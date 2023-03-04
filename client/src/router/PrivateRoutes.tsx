import { ROUTE } from '@/constants/route.constant'
import PrivateRouter from '@/hoc/PrivateRouter'
import Apage from '@/pages/Apage'
import Bpage from '@/pages/Bpage'

const routes = [
  {
    path: ROUTE.A,
    element: Apage,
  },
  {
    path: ROUTE.B,
    element: Bpage,
  },
]

export const privateRoutesWithHeader = routes.map(({ path, element }) => ({
  path,
  element: <PrivateRouter Component={element} />,
}))
