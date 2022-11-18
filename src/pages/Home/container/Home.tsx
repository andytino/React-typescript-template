import { useAuth } from '@/hooks/useAuthContext'
// import { useNotifications } from '../hooks/useNotifications'
// import { useUserNotifications } from '../hooks/useUserNotifications'

const Home = () => {
  const { user } = useAuth()

  // Hooks use Socket --> run source BE
  // const { notifications } = useUserNotifications({ id: '1200' })
  // const { notifications } = useNotifications()

  // console.log('notifications', notifications)

  return (
    <div>
      <h1>Home</h1>
      <p>Hello {user?.username}</p>
    </div>
  )
}

export default Home
