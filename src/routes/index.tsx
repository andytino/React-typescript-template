import { Suspense } from 'react'
import MainLayout from '@/layouts/MainLayout'
import PublicRoute from './Public'
import PrivateRoute from './Private'
import { PERMISSIONS, ROUTE_LIST } from '@/common/constants'
import { EROLES, MODE_LAYOUT, MODE_ROUTE } from '@/common/ts/enums'
import Loading from '@/common/components/loading/Loading'
import { IUser } from '@/hooks/useAuth'
import { checkPermission } from '@/common/utils'

const renderRoute = (route = MODE_ROUTE.PRIVATE, layout = MODE_LAYOUT.DEFAULT, user: IUser) => {
  console.log('aaa', user)
  return ROUTE_LIST.filter((i) => i.mode === route && i.layout === layout).map((e) => {
    // const r = user.roles as EROLES.ADMIN
    // console.log('PERMISSIONS[user.roles]', PERMISSIONS[r])
    // console.log('PERMISSIONS[user.roles]', PERMISSIONS[user.roles])
    // const a = checkPermission(PERMISSIONS[user.roles], [e?.scopeView])
    return {
      ...e,
      element: <Suspense fallback={<Loading />}>{e.element}</Suspense>
    }
  })
}

export const createRoutes = (user: IUser) => {
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
