import { ReactNode, Suspense } from 'react'
import PublicRoute from './Public'
import PrivateRoute from './Private'
import { PERMISSIONS, RouteType, ROUTE_LIST } from '@/common/constants'
import { MODE_LAYOUT, MODE_ROUTE } from '@/common/ts/enums'
import Loading from '@/common/components/loading/Loading'
import { checkPermission, typeOf } from '@/common/utils'
import { AuthUser } from '@/common/ts/interfaces'
import { formatLayout } from '@/common/constants/layout'

// const renderChildRoute = (modeRoute: MODE_ROUTE, user: AuthUser, route: RouteType[]) => {
//   return route
//     .filter((i) => i.mode === modeRoute)
//     .map((e) => {
//       const permission = checkPermission(PERMISSIONS[user.roles], [e?.permission])
//       if (typeOf(e.element) === 'Array') {
//         const a = e.element as RouteType[]
//         renderChildRoute(modeRoute, user, a)
//         // return {
//         //   ...e,
//         //   // element: renderChildRoute(modeRoute, user, a)
//         //   element: (
//         //     <Suspense fallback={<Loading />}>
//         //       {permission ? (a[0]?.element as ReactNode) : null}
//         //     </Suspense>
//         //   )
//         // }
//       } else {
//         return {
//           ...e,
//           element: (
//             <Suspense fallback={<Loading />}>
//               {permission ? (e.element as ReactNode) : null}
//             </Suspense>
//           )
//         }
//       }
//     })
// }

const renderRoute = (modeRoute: MODE_ROUTE, user: AuthUser, route: RouteType[]) => {
  return route
    .filter((i) => i.mode === modeRoute)
    .map((e) => {
      const permission = checkPermission(PERMISSIONS[user.roles], [e?.permission])
      return {
        ...e,
        element: <Suspense fallback={<Loading />}>{permission ? e.element : null}</Suspense>,
        children: e.children && e.children?.length > 0 ? e.children : []
      }
      // if (typeOf(e.element) === 'Array') {
      //   const a = e.element as RouteType[]
      //   renderChildRoute(modeRoute, user, a)
      //   // return {
      //   //   ...e,
      //   //   element: renderChildRoute(modeRoute, user, a)
      //   //   // element: (
      //   //   //   <Suspense fallback={<Loading />}>
      //   //   //     {permission ? (a[0]?.element as ReactNode) : null}
      //   //   //   </Suspense>
      //   //   // )
      //   // }
      // } else {
      //   return {
      //     ...e,
      //     element: (
      //       <Suspense fallback={<Loading />}>
      //         {permission ? (e.element as ReactNode) : null}
      //       </Suspense>
      //     )
      //   }
      // }
    })
}

export const createRoutes = (user: AuthUser, modeLayout: MODE_LAYOUT) => {
  return [
    {
      element: <PrivateRoute>{formatLayout(modeLayout)}</PrivateRoute>,
      children: renderRoute(MODE_ROUTE.PRIVATE, user, ROUTE_LIST)
    },
    {
      element: <PublicRoute />,
      children: renderRoute(MODE_ROUTE.PUBLIC, user, ROUTE_LIST)
    }
  ]
}
