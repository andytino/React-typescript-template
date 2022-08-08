import { MODE_LAYOUT, MODE_ROUTE, EROLES } from '@/common/ts/enums'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import { lazy, ReactNode } from 'react'

type RouteType = {
  page: string
  path: string
  mode: number
  layout: number
  role?: number[]
  element: ReactNode
}

const Home = lazy(() => import('../../pages/Home'))
const About = lazy(() => import('../../pages/About'))
const Contact = lazy(() => import('../../pages/Contact'))

const permissonAll = [EROLES.all]
// const permissionAdmin = [EROLES.admin, EROLES.user]
// const permissionSuperAdmin = [EROLES.admin, EROLES.user]

export const ROUTE_LIST: RouteType[] = [
  {
    page: 'login',
    path: '/login',
    mode: MODE_ROUTE.public,
    layout: MODE_LAYOUT.default,
    element: <Login />
  },
  {
    page: 'home',
    path: '/',
    mode: MODE_ROUTE.private,
    layout: MODE_LAYOUT.main,
    role: permissonAll,
    element: <Home />
  },
  {
    page: 'home',
    path: '/home',
    mode: MODE_ROUTE.private,
    layout: MODE_LAYOUT.main,
    role: permissonAll,
    element: <Home />
  },
  {
    page: 'about',
    path: '/about',
    mode: MODE_ROUTE.private,
    layout: MODE_LAYOUT.main,
    role: permissonAll,
    element: <About />
  },
  {
    page: 'contact',
    path: '/contact',
    mode: MODE_ROUTE.private,
    layout: MODE_LAYOUT.main,
    role: permissonAll,
    element: <Contact />
  },
  {
    page: 'notFound',
    path: '/not_found',
    mode: MODE_ROUTE.public,
    layout: MODE_LAYOUT.default,
    role: permissonAll,
    element: <NotFound />
  }
]
