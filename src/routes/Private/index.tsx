import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface PrivateProps {
  children?: JSX.Element
}

const PrivateRoute = (props: PrivateProps) => {
  console.log('PrivateRoute')
  const auth = false
  const location = useLocation()
  if (auth) {
    return <Navigate to='/login' state={{ from: location }} />
  } else if (props.children) {
    return props.children
  } else {
    return <Outlet />
  }
}

export default PrivateRoute
