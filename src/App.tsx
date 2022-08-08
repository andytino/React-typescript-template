import './App.css'
import '@/styles/index.scss'
import { useRoutes } from 'react-router-dom'
import { createRoutes } from './routes/index'

function App() {
  const routes = useRoutes(createRoutes())
  return <div className='App'>{routes}</div>
}

export default App
