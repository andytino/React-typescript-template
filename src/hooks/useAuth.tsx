import { ROUTE_PATH } from '@/common/constants'
import { createContext, useContext, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import { ReactNode } from 'react'
import { USER_ROLES } from '@/common/ts/enums'
import { AuthUser } from '@/common/ts/interfaces'

interface AppContextInterface {
  user: AuthUser
  login: (data: AuthUser) => Promise<void>
  logout: () => void
}

const initUser = {
  username: 'guest',
  roles: USER_ROLES['GUEST']
}
const initToken = null

const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

const AuthContext = createContext<AppContextInterface>({} as AppContextInterface)

export const AuthProvider = (props: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<AuthUser>('user', initUser)
  const [token, setToken] = useLocalStorage<string | null>('token', initToken)

  //Check Token
  useEffect(() => {
    setToken(fakeToken)
    // console.log('useEffect')
  }, [])

  const navigate = useNavigate()

  const login = async (data: AuthUser) => {
    setUser(data)
    navigate(ROUTE_PATH.default, { replace: true })
  }

  const logout = () => {
    setUser(initUser)
    setToken(null)
    navigate(ROUTE_PATH.login, { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user, login, logout]
  )

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
