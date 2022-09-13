import { USER_ROLES } from '@/common/ts/enums'
import { useAuth } from '@/hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface PrivateProps {
  children?: JSX.Element
}

const PrivateRoute = (props: PrivateProps) => {
  const { user } = useAuth()
  const location = useLocation()
  if (user.roles === USER_ROLES['GUEST']) {
    return <Navigate to='/login' state={{ from: location }} replace />
  } else if (props.children) {
    return props.children
  } else {
    return <Outlet />
  }
}

export default PrivateRoute
