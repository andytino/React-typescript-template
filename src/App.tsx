import './App.css'
import '@/styles/index.scss'
import { useRoutes } from 'react-router-dom'
import { createRoutes } from './routes/index'
import { useAuth } from '@/hooks/useAuth'
import { MODE_LAYOUT } from './common/ts/enums'
// import { useEffect } from 'react'
import { useGetUsersQuery } from './services/user'

function App() {
  const { user } = useAuth()
  const routes = useRoutes(createRoutes(user, MODE_LAYOUT.MAIN))
  const { data } = useGetUsersQuery()
  console.log('data===', data)

  return <div className='App'>{routes}</div>
}

export default App
