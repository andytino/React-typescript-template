import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { ROUTE_PATH } from '@/common/constants'
import { selectToken } from '@/store/authToken'
import { useAppSelector } from '@/store/hook'

interface PrivateProps {
  children?: JSX.Element
}

const PrivateRoute = (props: PrivateProps) => {
  const { accessToken } = useAppSelector(selectToken)
  const location = useLocation()
  // console.log('props', props)

  if (!accessToken) {
    return <Navigate to={ROUTE_PATH.login} state={{ from: location }} replace />
  } else if (props.children) {
    return props.children
  } else {
    return <Outlet />
  }
}

export default PrivateRoute
