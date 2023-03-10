import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import AuthLogin from './components/AuthLogin'
import Login from './pages/Login'
import { getUserWithLocal, getUserWithToken, loginWithLocal, loginWithToken } from './util/api/login'


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
        path : '/auth/login/jwt',
        element : <Login 
        label = 'jwt'
        loginFn={loginWithToken}
        getUserFn={getUserWithToken}/>,
        loginRequired : false,
        label : '토큰 로그인'
    },
    {
        path : '/auth/login/local',
        element : <Login 
        label = 'local'
        loginFn={loginWithLocal}
        getUserFn={getUserWithLocal}/>,
        loginRequired : false,
        label : '로컬스토리지 로그인'
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