import { Header } from '@/common/components/Header'
import SideBar from '@/common/components/Sidebar'
import { useAuth } from '@/hooks/useAuth'
import { useLogout } from '@/hooks/useLogout'
import { Outlet } from 'react-router-dom'
import { initialUserState } from '@/store/user'

const MainLayout = () => {
  const { user, moveToLoginPage } = useAuth()
  const { logout } = useLogout()

  return (
    <>
      {user.id !== initialUserState.id && (
        <>
          <Header user={user} onLogin={moveToLoginPage} onLogout={logout} />
          <SideBar />
          <Outlet />
        </>
      )}
    </>
  )
}

export default MainLayout
