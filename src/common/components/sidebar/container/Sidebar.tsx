import { PERMISSIONS, RouteType, ROUTE_LIST } from '@/common/constants'
import { capitalizeFirstLetter, checkPermission } from '@/common/utils'
import { useAuth } from '@/hooks/useAuth'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

interface IListMenuProps {
  route: RouteType
  dept: number
  menuName?: string
  menuIndex?: number
  hasSubMenu?: RouteType[] | undefined
}

const SideBar = () => {
  const { user } = useAuth()

  const ListMenu = ({ route, dept, menuName, menuIndex, hasSubMenu }: IListMenuProps) => {
    const isShowInSidebar = checkPermission(PERMISSIONS[user.role], [route?.inSideBar])

    return (
      <>
        {isShowInSidebar ? (
          <li key={route.page} className={menuName}>
            <Link to={route.path}>{capitalizeFirstLetter(route.page)}</Link>
          </li>
        ) : null}
        {hasSubMenu && <SubListMenu route={route} dept={dept} menuIndex={menuIndex} />}
      </>
    )
  }

  const SubListMenu = ({ route, dept, menuIndex }: IListMenuProps) => {
    const subDept = dept + 1

    return (
      <ul>
        {route.children?.map((child, index) => {
          const menuName = `sidebar-submenu-${subDept}-${menuIndex}-${index}`
          return (
            <ListMenu
              key={index}
              route={child}
              dept={subDept}
              menuName={menuName}
              hasSubMenu={route.children}
            />
          )
        })}
      </ul>
    )
  }

  return (
    <ul className={styles.wrapper}>
      {ROUTE_LIST.map((route, idx) => {
        const dept = 1
        const menuName = `sidebar-menu-${dept}-${idx}`
        return (
          <ListMenu
            key={idx}
            route={route}
            dept={dept}
            menuName={menuName}
            menuIndex={idx}
            hasSubMenu={route.children}
          />
        )
      })}
    </ul>
  )
}

export default SideBar
