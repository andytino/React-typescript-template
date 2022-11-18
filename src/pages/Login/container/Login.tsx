import { useLogIn } from '@/hooks/useLogin'

const Login = () => {
  const { login } = useLogIn()

  const handleSubmit = () => {
    login(fakeDataLogin)
  }

  return (
    <div>
      <div>Login</div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login

const fakeDataLogin = {
  email: 'thang@gmail.com',
  password: 'abc123!'
}
