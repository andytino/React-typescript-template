import { MODE_LAYOUT } from '@/common/ts/enums'
import DefaultLayout from '@/layouts/DefaultLayout'
import MainLayout from '@/layouts/MainLayout'
import SuperAdminLayout from '@/layouts/SuperAdminLayout'

const LAYOUT = new Map([
  [MODE_LAYOUT.MAIN, <MainLayout key={1} />],
  [MODE_LAYOUT.SUPER_ADMIN, <SuperAdminLayout key={2} />],
  [MODE_LAYOUT.DEFAULT, <DefaultLayout key={3}></DefaultLayout>]
])

export const formatLayout = (mode: MODE_LAYOUT) => {
  return LAYOUT.get(mode) || LAYOUT.get(MODE_LAYOUT.DEFAULT)
}
