import { Suspense } from 'react'
import PublicRoute from './Public'
import PrivateRoute from './Private'
import { PERMISSIONS, ROUTE_LIST } from '@/common/constants'
import { MODE_LAYOUT, MODE_ROUTE } from '@/common/ts/enums'
import Loading from '@/common/components/loading/Loading'
import { checkPermission } from '@/common/utils'
import { AuthUser } from '@/common/ts/interfaces'
import { formatLayout } from '@/common/constants/layout'

const renderRoute = (modeRoute: MODE_ROUTE, user: AuthUser) => {
  return ROUTE_LIST.filter((i) => i.mode === modeRoute).map((e) => {
    const permission = checkPermission(PERMISSIONS[user.roles], [e?.permission])
    return {
      ...e,
      element: <Suspense fallback={<Loading />}>{permission ? e.element : null}</Suspense>
    }
  })
}

export const createRoutes = (user: AuthUser, mode_layout: MODE_LAYOUT) => {
  return [
    {
      element: <PrivateRoute>{formatLayout(mode_layout)}</PrivateRoute>,
      children: renderRoute(MODE_ROUTE.PRIVATE, user)
    },
    {
      element: <PublicRoute />,
      children: renderRoute(MODE_ROUTE.PUBLIC, user)
    }
  ]
}
