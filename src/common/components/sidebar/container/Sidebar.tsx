import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <Link to='/'>Home</Link>
      <Link to='/about'>about</Link>
      <Link to='/contact'>contact</Link>
      <Link to='/not_found'>not_found</Link>
    </div>
  )
}

export default SideBar
