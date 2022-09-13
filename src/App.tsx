import './App.css'
import '@/styles/index.scss'
import { useRoutes } from 'react-router-dom'
import { createRoutes } from './routes/index'
import { useAuth } from '@/hooks/useAuth'
import { MODE_LAYOUT } from './common/ts/enums'

function App() {
  const { user } = useAuth()
  const routes = useRoutes(createRoutes(user, MODE_LAYOUT.MAIN))
  return <div className='App'>{routes}</div>
}

export default App
