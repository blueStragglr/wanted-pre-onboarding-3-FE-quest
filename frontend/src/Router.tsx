import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Detail from './pages/Detail'

export const router = createBrowserRouter([
    {
        path:'/*',
        element:<App/>,
        children : [
            {
                path:'',
                element : <Home/>,
                children:[
                    {
                        path: 'page/:pageId',
                        element : <Detail />,
                    }
                ]
            }   
        ]
    }
])