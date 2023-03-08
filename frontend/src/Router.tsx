import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import AuthLogin from './components/AuthLogin'

interface IRouterItem{
    path:string;
    element:React.ReactNode
    loginRequired:boolean;
    label:string;
}

interface ISidebarItem{
    path:string;
    element:React.ReactNode;
    label:string;
}

const detailPageList = ['react', 'js', 'ts']

const deatailPageRouter = detailPageList.map((detailPage:string) => {
    return {
        path : 'page/:pageId',
        element : <Detail />,
        loginRequired : true,
        label : detailPage
    }
})

export const allRouterInApp:IRouterItem[] = [
    {
        path : '',
        element : <Home />,
        loginRequired : false,
        label : '홈페이지'
    },
    {
        path : '/auth/login',
        element : <Login />,
        loginRequired : false,
        label : '로그인 페이지'
    },
    ...deatailPageRouter,
] 

export const getSidebarItem : ISidebarItem[] = (() => 
    allRouterInApp.reduce((prev:ISidebarItem[], current:IRouterItem) => {
        if(current.loginRequired){
            return [
                ...prev,
                {
                    path: current.path,
                    element : current.element,
                    label : current.label
                },
            ]
        }
        return prev
}, [] as ISidebarItem[]))();  

export const router = createBrowserRouter(
    allRouterInApp.map((routerItem:IRouterItem) => {
        return routerItem.loginRequired
        ?{
            path : routerItem.path,
            element: <AuthLogin element ={routerItem.element}/>,
         }
        :{
            path : routerItem.path,
            element : routerItem.element
         }
    })
)