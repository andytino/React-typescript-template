import './App.css'
import '@/styles/index.scss'
import { useRoutes } from 'react-router-dom'
import { createRoutes } from './routes/index'
import { useAuth } from '@/hooks/useAuth'

function App() {
  const { shortUserProfile } = useAuth()

  const routes = useRoutes(createRoutes(shortUserProfile))

  return <div className='App'>{routes}</div>
}

export default App
