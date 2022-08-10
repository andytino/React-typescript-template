import { MODE_LAYOUT, MODE_ROUTE } from '@/common/ts/enums'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import { lazy, ReactNode } from 'react'
import { ObjectWithDynamicKey } from '../ts/types'
import { SCOPES } from '@/common/constants'

type RouteType = {
  page: string
  path: string
  mode: number
  layout: number
  scopeView?: string
  inSideBar?: string // --- Permission to view in Sidebar
  element: ReactNode
}

const Home = lazy(() => import('../../pages/Home'))
const About = lazy(() => import('../../pages/About'))
const Contact = lazy(() => import('../../pages/Contact'))

export const ROUTE_LIST: RouteType[] = [
  {
    page: 'default',
    path: '/',
    mode: MODE_ROUTE.PRIVATE,
    layout: MODE_LAYOUT.MAIN,
    scopeView: SCOPES.canView,
    element: <Home />
  },
  {
    page: 'login',
    path: '/login',
    mode: MODE_ROUTE.PUBLIC,
    layout: MODE_LAYOUT.DEFAULT,
    scopeView: SCOPES.canView,
    element: <Login />
  },
  {
    page: 'home',
    path: '/home',
    mode: MODE_ROUTE.PRIVATE,
    layout: MODE_LAYOUT.MAIN,
    scopeView: SCOPES.canView,
    inSideBar: SCOPES.canView,
    element: <Home />
  },
  {
    page: 'about',
    path: '/about',
    mode: MODE_ROUTE.PRIVATE,
    layout: MODE_LAYOUT.MAIN,
    scopeView: SCOPES.canViewMiddle,
    inSideBar: SCOPES.canViewMiddle,
    element: <About />
  },
  {
    page: 'contact',
    path: '/contact',
    mode: MODE_ROUTE.PRIVATE,
    layout: MODE_LAYOUT.MAIN,
    scopeView: SCOPES.canViewAdvanced,
    inSideBar: SCOPES.canViewAdvanced,
    element: <Contact />
  },
  {
    page: 'notFound',
    path: '/not_found',
    mode: MODE_ROUTE.PUBLIC,
    layout: MODE_LAYOUT.DEFAULT,
    scopeView: SCOPES.canView,
    element: <NotFound />
  }
]

const ob: ObjectWithDynamicKey = {}
ROUTE_LIST.map((i) => (ob[i.page] = i.path))
export const ROUTE_PATH = {
  ...ob
}
