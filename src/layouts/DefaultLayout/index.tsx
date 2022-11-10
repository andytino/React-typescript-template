import { Header } from '@/common/components/Header'
import { useAuth } from '@/hooks/useAuth'
import { useLogout } from '@/hooks/useLogout'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  const { user, moveToLoginPage } = useAuth()
  const { logout } = useLogout()
  return (
    <>
      <Header user={user} onLogin={moveToLoginPage} onLogout={logout} />
      <Outlet />
    </>
  )
}

export default DefaultLayout
