import { USER_ROLES } from '@/common/ts/enums'
import { useAuth } from '@/hooks/useAuth'
import { useContext } from 'react'

const Home = () => {
  const { user } = useAuth()

  return (
    <div>
      <h1>Home</h1>
      <p>Hello {user?.username}</p>
    </div>
  )
}

export default Home
