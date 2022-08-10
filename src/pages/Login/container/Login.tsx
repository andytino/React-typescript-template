import { USER_ROLES } from '@/common/ts/enums'
import { useAuth } from '@/hooks/useAuth'

const Login = () => {
  const { login } = useAuth()

  const handleSubmit = () => {
    login(fakeDataLogin)
  }
  return (
    <>
      <div>Login</div>
      <button onClick={handleSubmit}>Login</button>
    </>
  )
}

export default Login

const fakeDataLogin = {
  username: 'thang',
  roles: USER_ROLES['SUPER_ADMIN']
}
