import { ROUTE_PATH } from '@/common/constants'
import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import { ReactNode } from 'react'
import { EROLES } from '@/common/ts/enums'

interface Props {
  children: ReactNode
}
export interface IUser {
  user: string
  roles: number
}

const initUser = {
  user: '',
  roles: EROLES['GUEST']
}

const initAutContext = {
  user: initUser
}
const AuthContext = createContext(initAutContext)

export const AuthProvider = (props: Props) => {
  const [user, setUser] = useLocalStorage('user', initUser)
  const navigate = useNavigate()

  const login = async (data: IUser) => {
    setUser(data)
    navigate(ROUTE_PATH.default, { replace: true })
  }

  const logout = () => {
    setUser(null)
    navigate(ROUTE_PATH.default, { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
