import { Header } from '@/common/components/Header'
import SideBar from '@/common/components/Sidebar'
import { useAuth } from '@/hooks/useAuth'
import { useLogout } from '@/hooks/useLogout'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const { user, moveToLoginPage } = useAuth()
  const { logout } = useLogout()

  return (
    <>
      <Header user={user} onLogin={moveToLoginPage} onLogout={logout} />
      <SideBar />
      <Outlet />
    </>
  )
}

export default MainLayout
