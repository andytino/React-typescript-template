import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { ROUTE_LIST } from '@/common/constants'

interface PublicProps {
  children?: JSX.Element
}

const PublicRoute = (props: PublicProps) => {
  console.log('PublicRoute')
  const auth = false
  const location = useLocation()
  if (auth) {
    return <Navigate to='login' state={{ from: location }} />
  } else if (props.children) {
    return props.children
  } else {
    return <Outlet />
  }
}

export default PublicRoute
