import { Header } from '@/common/components/Header'
import SideBar from '@/common/components/Sidebar'
import { useAuth } from '@/hooks/useAuth'
import { useLogout } from '@/hooks/useLogout'
import { initialUserState } from '@/store/user'
import { Outlet } from 'react-router-dom'

const SuperAdminLayout = () => {
  const { user, moveToLoginPage } = useAuth()
  const { logout } = useLogout()
  return (
    <>
      {user.id !== initialUserState.id && (
        <>
          <Header user={user} onLogin={moveToLoginPage} onLogout={logout} />
          <h1 className='title'>SUPER ADMIN ROLES</h1>
          <SideBar />
          <Outlet />
        </>
      )}
    </>
  )
}

export default SuperAdminLayout
