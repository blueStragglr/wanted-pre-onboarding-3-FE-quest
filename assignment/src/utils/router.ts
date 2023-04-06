import { Router } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";


export interface RouterItem {
    path: string;
    element : React.ReactNode;
    withAuthorization : boolean;
    label : string;
    // icon: SVGAElement;
}


export const RouterInfo : RouterItem[]=[
{path: '/',
element : <Home/>,
withAuthorization: true,
label: '홈',
//  icon : <PeopleIcon/>
},
 {path: '/',
element : <PageB/>,
withAuthorization: true,
label: '홈',
//  icon : <PeopleIcon/>
},
 {path: '/',
element : <PageC/>,
withAuthorization: true,
label: '홈',
//  icon : <PeopleIcon/>
}
]

export const ReactRouterObject : Router = createBrowserRouter(
    RouterInfo.map((routerInfo : RouterItem)=>{
return routerInfo.withAuthorization?{
    path : routerInfo.path,
    element: 
    (    <Authorization currentPath = {routerInfo.path.replace(searchValue: /|/|*$/gc, replaceValue: '')}>
        {routerInfo.element}
        </Authorization>
    ),
}: {
    path: routerInfo.path,
    element: routerInfo.element,
}
    })
)

// usage
// <RouterProvider router = {ReactRouterObject} />