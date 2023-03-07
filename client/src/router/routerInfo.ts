import { ElementType } from 'react'

import Apage from '@/pages/Apage'
import Bpage from '@/pages/Bpage'
import Login from '@/pages/Login'
import Main from '@/pages/Main'
import SignUp from '@/pages/SignUp'

export const ROUTE = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  A: '/a',
  B: '/b',
} as const

export interface RouterInfo {
  label: string
  path: (typeof ROUTE)[keyof typeof ROUTE]
  element: ElementType
  withAuthorization: boolean
  restricted: boolean
  isInGnb: boolean
  withLayoutHeader: boolean
}

export const routerInfoList: RouterInfo[] = [
  {
    label: 'HOME',
    path: ROUTE.HOME,
    element: Main,
    withAuthorization: false,
    restricted: false,
    isInGnb: true,
    withLayoutHeader: true,
  },

  {
    label: 'A',
    path: ROUTE.A,
    element: Apage,
    withAuthorization: true,
    restricted: false,
    isInGnb: true,
    withLayoutHeader: true,
  },

  {
    label: 'B',
    path: ROUTE.B,
    element: Bpage,
    withAuthorization: true,
    restricted: false,
    isInGnb: true,
    withLayoutHeader: true,
  },

  {
    label: 'LOGIN',
    path: ROUTE.LOGIN,
    element: Login,
    withAuthorization: false,
    restricted: true,
    isInGnb: true,
    withLayoutHeader: false,
  },

  {
    label: 'SIGN_UP',
    path: ROUTE.SIGN_UP,
    element: SignUp,
    withAuthorization: false,
    restricted: true,
    isInGnb: true,
    withLayoutHeader: false,
  },
]

type FilterFunction<T> = (arg: T) => boolean

const applyFilters = <T>(items: T[], filterFunctions: FilterFunction<T>[]): T[] =>
  filterFunctions.reduce((filteredItems, filterFn) => filteredItems.filter(filterFn), items)

const withPrivate = (routerInfo: RouterInfo) => routerInfo.withAuthorization || !routerInfo.restricted

const withPublic = (routerInfo: RouterInfo) => !routerInfo.withAuthorization

const withLayoutHeader = (routerInfo: RouterInfo) => routerInfo.withLayoutHeader

const withLayoutFullPage = (routerInfo: RouterInfo) => !routerInfo.withLayoutHeader

const withInGnb = (routerInfo: RouterInfo) => routerInfo.isInGnb

export const gnbLinks = (isLogin: boolean) =>
  isLogin
    ? applyFilters(routerInfoList, [withInGnb, withPrivate])
    : applyFilters(routerInfoList, [withInGnb, withPublic])

export const routesWithHeaderPrivate = applyFilters(routerInfoList, [withPrivate, withLayoutHeader])

export const routesWithFullPagePrivate = applyFilters(routerInfoList, [withPrivate, withLayoutFullPage])

export const routesWithHeaderPublic = applyFilters(routerInfoList, [withPublic, withLayoutHeader])

export const routesWithFullPagePublic = applyFilters(routerInfoList, [withPublic, withLayoutFullPage])
