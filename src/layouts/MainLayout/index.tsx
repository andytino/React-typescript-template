import Header from '@/common/components/header'
import SideBar from '@/common/components/sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  )
}

export default MainLayout
