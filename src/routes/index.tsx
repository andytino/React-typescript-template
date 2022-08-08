import { Suspense } from 'react'
import MainLayout from '@/layouts/MainLayout'
import PublicRoute from './Public'
import PrivateRoute from './Private'
import { ROUTE_LIST } from '@/common/constants'
import { MODE_LAYOUT, MODE_ROUTE } from '@/common/ts/enums'
import Loading from '@/common/components/loading/Loading'

const renderRoute = (route = MODE_ROUTE.private, layout = MODE_LAYOUT.default) => {
  console.log('aaa')
  return ROUTE_LIST.filter((i) => i.mode === route && i.layout === layout).map((e) => {
    return {
      ...e,
      element: <Suspense fallback={<Loading />}>{e.element}</Suspense>
    }
  })
}

export const createRoutes = () => {
  return [
    {
      element: (
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      ),
      children: renderRoute(MODE_ROUTE.private, MODE_LAYOUT.main)
    },
    {
      element: <PublicRoute />,
      children: renderRoute(MODE_ROUTE.public, MODE_LAYOUT.default)
    }
  ]
}
