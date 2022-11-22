import { MODE_ROUTE } from '@/common/ts/enums'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import { lazy, ReactNode, Suspense } from 'react'
import { ObjectWithDynamicKey } from '../ts/types'
import { SCOPES } from '@/common/constants'
import Loading from '../components/Loading/Loading'
// import Home from '@/pages/Home'
// import About from '@/pages/About'
// import Pattern from '@/pages/Pattern'
// import Contact from '@/pages/Contact'

export type RouteType = {
  index?: boolean
  page: string
  path: string
  mode: number // --- use for layout
  permission: string // --- use for route
  inSideBar?: string // --- Permission to show menu item in Sidebar
  element?: ReactNode
  children?: RouteType[]
}

const Home = lazy(() => import('../../pages/Home'))
const About = lazy(() => import('../../pages/About'))
const Contact = lazy(() => import('../../pages/Contact'))
const Pattern = lazy(() => import('../../pages/Pattern'))

const ListNews = lazy(() => import('../../pages/News/component/ListNews'))
const EditNews = lazy(() => import('../../pages/News/component/EditNews'))
const DetailNews = lazy(() => import('../../pages/News/component/DetailNews'))
const CreateNews = lazy(() => import('../../pages/News/component/CreateNews'))

const renderElement = (component: JSX.Element) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>
}

export const ROUTE_LIST: RouteType[] = [
  // {
  //   page: 'default',
  //   path: '/',
  //   mode: MODE_ROUTE.PUBLIC,
  //   permission: SCOPES.canView,
  //   element: <Home />
  // },
  {
    page: 'login',
    path: '/login',
    mode: MODE_ROUTE.PUBLIC,
    permission: SCOPES.canView,
    element: renderElement(<Login />)
  },
  {
    page: 'home',
    path: '/home',
    mode: MODE_ROUTE.PRIVATE,
    permission: SCOPES.canView,
    inSideBar: SCOPES.canView,
    element: renderElement(<Home />)
  },
  {
    page: 'about',
    path: '/about',
    mode: MODE_ROUTE.PRIVATE,
    permission: SCOPES.canViewMiddle,
    inSideBar: SCOPES.canViewMiddle,
    element: renderElement(<About />)
  },
  {
    page: 'contact',
    path: '/contact',
    mode: MODE_ROUTE.PRIVATE,
    permission: SCOPES.canViewAdvanced,
    inSideBar: SCOPES.canViewAdvanced,
    element: renderElement(<Contact />)
  },
  {
    page: 'pattern',
    path: '/pattern',
    mode: MODE_ROUTE.PRIVATE,
    permission: SCOPES.canView,
    inSideBar: SCOPES.canView,
    element: renderElement(<Pattern />)
  },
  {
    page: 'news',
    path: '/news',
    mode: MODE_ROUTE.PRIVATE,
    permission: SCOPES.canViewAdvanced,
    inSideBar: SCOPES.canViewAdvanced,
    children: [
      {
        index: true,
        page: 'list',
        path: '',
        mode: MODE_ROUTE.PRIVATE,
        permission: SCOPES.canViewAdvanced,
        inSideBar: SCOPES.canViewAdvanced,
        element: renderElement(<ListNews />)
      },
      {
        index: true,
        page: 'edit',
        path: 'edit',
        mode: MODE_ROUTE.PRIVATE,
        permission: SCOPES.canViewAdvanced,
        inSideBar: SCOPES.canViewAdvanced,
        element: renderElement(<EditNews />)
      },
      {
        index: true,
        page: 'detail',
        path: ':newsId',
        mode: MODE_ROUTE.PRIVATE,
        permission: SCOPES.canViewAdvanced,
        element: renderElement(<DetailNews />)
      },
      {
        index: true,
        page: 'create',
        path: 'create',
        mode: MODE_ROUTE.PRIVATE,
        permission: SCOPES.canViewAdvanced,
        inSideBar: SCOPES.canViewAdvanced,
        element: renderElement(<CreateNews />)
      }
    ]
  },

  {
    page: 'notFound',
    path: '*',
    mode: MODE_ROUTE.PUBLIC,
    permission: SCOPES.canView,
    element: renderElement(<NotFound />)
  }
]

const ob: ObjectWithDynamicKey = {}
ROUTE_LIST.map((i) => (ob[i.page] = i.path))
export const ROUTE_PATH = {
  ...ob
}
