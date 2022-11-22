import { Header } from '@/common/components/Header'
import { useAuth } from '@/hooks/useAuth'
import { useLogout } from '@/hooks/useLogout'
import { initialUserState } from '@/store/user'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  const { user, moveToLoginPage } = useAuth()
  const { logout } = useLogout()
  return (
    <>
      <p>default layout</p>
      {user.id !== initialUserState.id && (
        <>
          <Header
            user={user}
            onLogin={moveToLoginPage}
            onLogout={logout}
            layout={'Default layout'}
          />
          <Outlet />
        </>
      )}
    </>
  )
}

export default DefaultLayout
