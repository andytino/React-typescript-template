import { useLogIn } from '@/pages/Login/hooks/useLogin'
import { infoLogin } from '@/mocks/mocks_data/auth'

const Login = () => {
  const { login } = useLogIn()

  const handleSubmit = () => {
    login(infoLogin)
  }

  return (
    <div>
      <div>Login</div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
