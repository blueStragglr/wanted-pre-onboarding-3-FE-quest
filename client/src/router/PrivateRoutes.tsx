import PrivateRouter from '@/hoc/PrivateRouter'
import { routesWithHeaderPrivate } from '@/router/routerInfo'

export const privateRoutesWithHeader = routesWithHeaderPrivate.map(({ path, element }) => ({
  path,
  element: <PrivateRouter Component={element} />,
}))
