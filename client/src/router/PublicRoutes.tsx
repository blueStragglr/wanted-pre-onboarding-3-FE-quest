import { ROUTE } from '@/constants/route.constant'
import PublicRouter from '@/hoc/PublicRouter'
import Login from '@/pages/Login'
import Main from '@/pages/Main'
import SignUp from '@/pages/SignUp'

const routesWithHeader = [
  {
    path: ROUTE.HOME,
    element: Main,
    restricted: false,
  },
]

const routesWithFullPage = [
  {
    path: ROUTE.SIGN_UP,
    element: SignUp,
    restricted: true,
  },
  {
    path: ROUTE.LOGIN,
    element: Login,
    restricted: true,
  },
]

export const publicRoutesWithHeader = routesWithHeader.map(({ path, element, restricted }) => ({
  path,
  element: <PublicRouter Component={element} restricted={restricted} />,
}))

export const publicRoutesWithFullPage = routesWithFullPage.map(({ path, element, restricted }) => ({
  path,
  element: <PublicRouter Component={element} restricted={restricted} />,
}))
