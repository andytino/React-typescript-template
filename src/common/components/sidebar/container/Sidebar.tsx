import { PERMISSIONS, ROUTE_LIST } from '@/common/constants'
import { capitalizeFirstLetter, checkPermission } from '@/common/utils'
import { useAuth } from '@/hooks/useAuth'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const SideBar = () => {
  const { user, logout } = useAuth()

  return (
    <div className={styles.wrapper}>
      {ROUTE_LIST.map((route) => {
        const permission = checkPermission(PERMISSIONS[user.roles], [route?.inSideBar])
        return (
          <p key={route.page}>
            {permission ? <Link to={route.path}>{capitalizeFirstLetter(route.page)}</Link> : null}
          </p>
        )
      })}
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default SideBar
