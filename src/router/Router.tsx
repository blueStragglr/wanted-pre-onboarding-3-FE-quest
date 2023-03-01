import {createBrowserRouter} from 'react-router-dom'

import * as P from '../components/Page'
import {Layout} from '../components/Layout'
import {Loader, LoginLoader} from '../Loader/loader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: Loader,
    children: [
      {
        path: 'a',
        element: <P.PageA />,
        loader: Loader
      },
      {
        path: 'b',
        element: <P.PageB />,
        loader: Loader
      },
      {
        path: 'c',
        element: <P.PageC />,
        loader: Loader
      }
    ]
  },
  {
    path: 'login',
    element: <P.Login />,
    loader: LoginLoader
  }
])

export default router
