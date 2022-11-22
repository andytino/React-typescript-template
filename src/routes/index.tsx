import PublicRoute from './Public'
import PrivateRoute from './Private'
import { PERMISSIONS, RouteType, ROUTE_LIST } from '@/common/constants'
import { MODE_ROUTE } from '@/common/ts/enums'
import { checkPermission } from '@/common/utils'
import { AuthUser } from '@/common/ts/interfaces'
import { formatLayoutWithRole } from '@/common/constants/layout'
import NotFound from '@/pages/NotFound'

const renderRoute = (modeRoute: MODE_ROUTE, user: AuthUser, route: RouteType[]) => {
  return route
    .filter((i) => i.mode === modeRoute)
    .map((e) => {
      const permission = checkPermission(PERMISSIONS[user.roles], [e?.permission])
      const hasChild = e.children && e.children?.length > 0
      return {
        ...e,
        element: permission ? e.element : <NotFound />,
        children: hasChild ? e.children : []
      }
    })
}

export const createRoutes = (user: AuthUser) => {
  return [
    {
      element: <PrivateRoute>{formatLayoutWithRole(user.roles)}</PrivateRoute>,
      children: renderRoute(MODE_ROUTE.PRIVATE, user, ROUTE_LIST)
    },
    {
      element: <PublicRoute />,
      children: renderRoute(MODE_ROUTE.PUBLIC, user, ROUTE_LIST)
    }
  ]
}
