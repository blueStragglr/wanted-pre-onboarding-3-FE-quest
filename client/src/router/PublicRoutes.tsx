import PublicRouter from '@/hoc/PublicRouter'
import { routesWithFullPagePublic, routesWithHeaderPublic } from '@/router/routerInfo'

export const publicRoutesWithHeader = routesWithHeaderPublic.map(({ path, element, restricted }) => ({
  path,
  element: <PublicRouter Component={element} restricted={restricted} />,
}))

export const publicRoutesWithFullPage = routesWithFullPagePublic.map(({ path, element, restricted }) => ({
  path,
  element: <PublicRouter Component={element} restricted={restricted} />,
}))
