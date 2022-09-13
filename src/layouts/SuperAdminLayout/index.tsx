import SideBar from '@/common/components/sidebar'
import { Outlet } from 'react-router-dom'

const SuperAdminLayout = () => {
  return (
    <>
      <h1 className='title'>SUPER ADMIN ROLES</h1>
      <SideBar />
      <Outlet />
    </>
  )
}

export default SuperAdminLayout
