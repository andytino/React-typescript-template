import { PERMISSIONS, ROUTE_LIST } from '@/common/constants'
import { capitalizeFirstLetter, checkPermission } from '@/common/utils'
import { useAuth } from '@/hooks/useAuth'
import { initialUserState } from '@/store/user'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const SideBar = () => {
  const { user } = useAuth()

  return (
    <div className={styles.wrapper}>
      {user.id !== initialUserState.id &&
        ROUTE_LIST.map((route) => {
          const permission = checkPermission(PERMISSIONS[user.role], [route?.inSideBar])
          return (
            <p key={route.page}>
              {permission ? <Link to={route.path}>{capitalizeFirstLetter(route.page)}</Link> : null}
            </p>
          )
        })}
    </div>
  )
}

export default SideBar
