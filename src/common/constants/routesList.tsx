import { MODE_ROUTE } from '@/common/ts/enums'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import { lazy, ReactNode } from 'react'
import { ObjectWithDynamicKey } from '../ts/types'
import { SCOPES } from '@/common/constants'
import { RouteObject } from 'react-router-dom'

export type RouteType = {
  index?: boolean
  page: string
  path: string
  mode: number
  permission: string
  inSideBar?: string // --- Permission to show menu item in Sidebar
  element?: ReactNode
  children?: RouteObject[]
}

const Home = lazy(() => import('../../pages/Home'))
const About = lazy(() => import('../../pages/About'))
const Contact = lazy(() => import('../../pages/Contact'))
const Pattern = lazy(() => import('../../pages/Pattern'))

export const ROUTE_LIST: RouteType[] = [
  {
    page: 'default',
    path: '/',
    mode: MODE_ROUTE.PUBLIC,
    permission: SCOPES.canView,
    element: <Home />
  },
  {
    page: 'login',
    path: '/login',
    mode: MODE_ROUTE.PUBLIC,
    permission: SCOPES.canView,
    element: <Login />
  },
  {
    page: 'home',
    path: '/home',
    mode: MODE_ROUTE.PRIVATE,
    permission: SCOPES.canView,
    inSideBar: SCOPES.canView,
    element: <Home />
  },
  {
    page: 'about',
    path: '/about',
    mode: MODE_ROUTE.PRIVATE,
    permission: SCOPES.canViewMiddle,
    inSideBar: SCOPES.canViewMiddle,
    element: <About />
  },
  {
    page: 'contact',
    path: '/contact',
    mode: MODE_ROUTE.PRIVATE,
    permission: SCOPES.canView,
    inSideBar: SCOPES.canView,
    element: <Contact />,
    children: [
      {
        index: true,
        element: <Contact />
      },
      {
        path: ':id',
        element: <Pattern />
      }
    ]
  },
  // {
  //   page: 'pattern',
  //   path: '/pattern',
  //   mode: MODE_ROUTE.PRIVATE,
  //   permission: SCOPES.canView,
  //   inSideBar: SCOPES.canView,
  //   element: <Pattern />
  // },
  {
    page: 'notFound',
    path: '/not_found',
    mode: MODE_ROUTE.PUBLIC,
    permission: SCOPES.canView,
    element: <NotFound />
  }
]

const ob: ObjectWithDynamicKey = {}
ROUTE_LIST.map((i) => (ob[i.page] = i.path))
export const ROUTE_PATH = {
  ...ob
}
