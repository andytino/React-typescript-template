import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/about'>about</Link>
      <Link to='/contact'>contact</Link>
      <Link to='/not_found'>not_found</Link>
    </>
  )
}

export default SideBar
