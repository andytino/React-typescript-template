import { Suspense } from 'react'
import MainLayout from '@/layouts/MainLayout'
import PublicRoute from './Public'
import PrivateRoute from './Private'
import { PERMISSIONS, ROUTE_LIST } from '@/common/constants'
import { MODE_LAYOUT, MODE_ROUTE } from '@/common/ts/enums'
import Loading from '@/common/components/loading/Loading'
import { checkPermission } from '@/common/utils'
import { AuthUser } from '@/common/ts/interfaces'

const renderRoute = (route = MODE_ROUTE.PRIVATE, layout = MODE_LAYOUT.DEFAULT, user: AuthUser) => {
  return ROUTE_LIST.filter((i) => i.mode === route && i.layout === layout).map((e) => {
    const permission = checkPermission(PERMISSIONS[user.roles], [e?.scopeView])
    return {
      ...e,
      element: <Suspense fallback={<Loading />}>{permission ? e.element : null}</Suspense>
    }
  })
}

export const createRoutes = (user: AuthUser) => {
  return [
    {
      element: (
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      ),
      children: renderRoute(MODE_ROUTE.PRIVATE, MODE_LAYOUT.MAIN, user)
    },
    {
      element: <PublicRoute />,
      children: renderRoute(MODE_ROUTE.PUBLIC, MODE_LAYOUT.DEFAULT, user)
    }
  ]
}
