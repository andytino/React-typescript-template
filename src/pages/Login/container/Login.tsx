import { useLogIn } from '@/hooks/useLogin'

const Login = () => {
  const { login } = useLogIn()

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
  email: 'thang@gmail.com',
  password: 'abc123!'
}
